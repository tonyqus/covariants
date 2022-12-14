import React from 'react'

import { Col, Row } from 'reactstrap'
import { ClusterButtonPanelLayout } from 'src/components/ClusterButtonPanel/ClusterButtonPanelLayout'

import { NarrowPageContainer } from 'src/components/Common/ClusterSidebarLayout'
import { Editable } from 'src/components/Common/Editable'
import { Layout } from 'src/components/Layout/Layout'
import { useRouter } from "next/router";
import HomeContent from '../../../../content/Home.md'
import HomeContent_zh from '../../../../content/Home_zh-CN.md'

export function HomePage() {
  const { locale} = useRouter();
  return (
    <Layout>
      <NarrowPageContainer>
        <Row noGutters>
          <Col>
            <h1 className="display-4 mb-4 text-center">CoVariants</h1>
          </Col>
        </Row>

        <Row noGutters>
          <Col>
            <ClusterButtonPanelLayout>
              <Editable>
                {
                locale== "zh-CN"? <HomeContent_zh />:<HomeContent />
                }
              </Editable>
            </ClusterButtonPanelLayout>
          </Col>
        </Row>
      </NarrowPageContainer>
    </Layout>
  )
}
