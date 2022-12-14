import React from 'react'

import { Col, Container, Row } from 'reactstrap'
import { CenteredEditable } from 'src/components/Common/Editable'
import { PageHeading } from 'src/components/Common/PageHeading'
import { Layout } from 'src/components/Layout/Layout'
import { useRouter } from "next/router";
import Faq from '../../../../content/Faq.md'
import Faq_zh from '../../../../content/Faq_zh-CN.md'

export function FaqPage() {
  const { locale} = useRouter();
  return (
    <Layout>
      <Container>
        <Row noGutters>
          <Col>
            <PageHeading>{'Frequently asked questions'}</PageHeading>
          </Col>
        </Row>

        <Row noGutters>
          <Col>
            <CenteredEditable githubUrl="blob/master/content/Faq.md">
            {
                locale== "zh-CN"? <Faq_zh />:<Faq />
            }
            </CenteredEditable>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
