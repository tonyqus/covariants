/* eslint-disable camelcase */
import React, { CSSProperties, useMemo, useRef } from 'react'

import dynamic from 'next/dynamic'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Label } from 'recharts'
import { DateTime } from 'luxon'

import { useTheme } from 'styled-components'
import { CasesPlotTooltip } from './CasesPlotTooltip'
import type { PerCountryCasesDistributionDatum } from 'src/io/getPerCountryCasesData'
import { useTranslationSafe } from 'src/helpers/useTranslationSafe'
import { CLUSTER_NAME_OTHERS, useClusterColors } from 'src/io/getClusters'
import { formatDateHumanely } from 'src/helpers/format'
import { adjustTicks } from 'src/helpers/adjustTicks'
import { PlotPlaceholder } from 'src/components/Common/PlotPlaceholder'
import { ChartContainer } from 'src/components/Common/ChartContainer'
import { Ticks, TimeDomain } from 'src/io/useParams'

const CHART_MARGIN = { left: 10, top: 12, bottom: 6, right: 12 }
const ALLOW_ESCAPE_VIEW_BOX = { x: false, y: true }

export interface CasesPlotProps {
  cluster_names: string[]
  distribution: PerCountryCasesDistributionDatum[]
  ticks: Ticks
  timeDomain: TimeDomain
}

export function CasesPlotComponent({ cluster_names, distribution, ticks, timeDomain }: CasesPlotProps) {
  const { t } = useTranslationSafe()
  const theme = useTheme()
  const chartRef = useRef(null)
  const getClusterColor = useClusterColors()

  const data = distribution.map(({ week, stand_total_cases, stand_estimated_cases }) => {
    const weekSec = DateTime.fromFormat(week, 'yyyy-MM-dd').toSeconds()
    return { week: weekSec, ...stand_estimated_cases, total: stand_total_cases }
  })

  const yAxisLabelStyle: CSSProperties = useMemo(
    () => ({
      textAnchor: 'middle',
      fontSize: '80%',
      fill: theme.gray800,
    }),
    [theme],
  )

  return (
    <ChartContainer>
      {({ width, height }) => {
        const adjustedTicks = adjustTicks(ticks, width ?? 0, theme.plot.tickWidthMin).slice(1) // slice ensures first tick is not outside domain
        return (
          <AreaChart width={width} height={height} margin={CHART_MARGIN} data={data} ref={chartRef}>
            <XAxis
              dataKey="week"
              type="number"
              tickFormatter={formatDateHumanely}
              domain={timeDomain}
              ticks={adjustedTicks}
              tick={theme.plot.tickStyle}
              tickMargin={theme.plot.tickMargin?.x}
              allowDataOverflow
            />
            <YAxis
              type="number"
              name="Cases per million"
              tick={theme.plot.tickStyle}
              tickMargin={theme.plot.tickMargin?.y}
              allowDataOverflow
            >
              <Label
                style={yAxisLabelStyle}
                position="insideLeft"
                offset={0}
                angle={270}
                value={t('Cases per million people')}
              />
            </YAxis>

            {cluster_names.map((cluster) => (
              <Area
                key={cluster}
                type="monotone"
                dataKey={cluster}
                stackId="1"
                stroke="none"
                fill={getClusterColor(cluster)}
                fillOpacity={1}
                isAnimationActive={false}
              />
            ))}

            <Area
              type="monotone"
              dataKey={CLUSTER_NAME_OTHERS}
              stackId="1"
              stroke="none"
              fill={theme.clusters.color.others}
              fillOpacity={1}
              isAnimationActive={false}
            />

            <CartesianGrid stroke={theme.plot.cartesianGrid.stroke} />

            <Tooltip
              content={CasesPlotTooltip}
              isAnimationActive={false}
              allowEscapeViewBox={ALLOW_ESCAPE_VIEW_BOX}
              offset={50}
            />
          </AreaChart>
        )
      }}
    </ChartContainer>
  )
}

export const CasesPlot = dynamic(() => Promise.resolve(CasesPlotComponent), {
  ssr: false,
  loading: PlotPlaceholder,
})
