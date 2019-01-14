import React, { Component } from 'react'
import styled from 'styled-components'
import {
  BackgroundContent,
  Column,
  Display1,
  Paragraph,
  Title2,
  Title3,
} from 'components/common'

import flowersImage from 'assets/img/flowers.jpg'

const Name = styled(Display1)`
  color: ${props => props.theme.titleTextColor};
  font-size: 4rem;
  padding: 0;
  margin: 0;
  display: block;
`

const Names = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10rem;
`

const GoogleMapLink = styled.a``

export class InfoSection extends Component {
  constructor(props) {
    super(props)
    this.bg = {}
  }

  componentWillMount() {
    if (typeof window !== 'undefined') this.innerHeight = window.innerHeight
  }
  render() {
    const { scrollTop } = this.props
    return (
      <BackgroundContent
        bgImage={flowersImage}
        vcenter
        ref={ref => (this.bg = ref)}
        animate={
          this.bg && scrollTop > this.bg.offsetTop - this.innerHeight / 1.8
            ? true
            : false
        }
      >
        <Column>
          <Names>
            <Name>Lydia Pang &</Name>
            <Name>Roo Williams</Name>
          </Names>
          <Title2>24 08 2019</Title2>

          <Paragraph lineHeight={1.4}>
            The field next to...
            <br />
            Pant Y Goitre House,
            <br />
            Kilgeddin
            <br />
            Abergavenny
            <br />
            NP7 9BB
          </Paragraph>
          <GoogleMapLink href="https://goo.gl/vcoQw2" target="_blank">
            Google Map
          </GoogleMapLink>

          <Title2>The Day</Title2>
          <Paragraph>
            Please be at the field no later than 3pm, the ceremony will begin at
            3:15. Also, do factor in time to park and a short walk to the
            ceremony along the river! Someone will be there to greet you at the
            field gate and show you where to go.
          </Paragraph>
          <Title3>Dress Code</Title3>
          <Paragraph>
            Bring the sunshine by wearing light and bright colors - white, grey,
            cream, pastels, eggshell, florals.
          </Paragraph>
          <Title3>Gifts</Title3>
          <Paragraph>
            Please do not buy us gifts. Your presence on the day is the best
            present we could ask for.
          </Paragraph>
          <Title3>Babies</Title3>
          <Paragraph>
            We adore your babies, but please don’t bring them on the day.
            <br />
            Ask us if you need babysitter info.
          </Paragraph>

          <Title2>The Day After</Title2>
          <Paragraph>
            Sonia and Peter (Lydia’s parents) will be hosting a hangover brunch
            at Lydia’s house from 11.30am on Sunday 25th. We’ll be in touch with
            details closer to the date!
          </Paragraph>
          <Title2>Out of Towners</Title2>
          <Title3>Accommodation</Title3>
          <Paragraph>
            We have 10 double rooms reserved at our favourite local hotel,{' '}
            <a href="https://www.angelabergavenny.com/" target="_blank">
              The Angel
            </a>
            .<br />
            To book one of the rooms please email{' '}
            <a
              href="mailto:reservations@angelabergavenny.com?subject=Reservation"
              target="_blank"
            >
              reservations@angelabergavenny.com
            </a>
            <br />
            or call +44 1873857121, and quote LYDIA + ROO WEDDING to book.
          </Paragraph>
          <Paragraph>
            There are also plenty of super cute{' '}
            <a
              href="https://www.airbnb.co.uk/s/Abergavenny--United-Kingdom/homes?refinement_paths%5B%5D=%2Fhomes&query=Abergavenny%2C%20United%20Kingdom&place_id=ChIJOxKQOuQnbkgR-sYgKuu18X0&allow_override%5B%5D=&map_toggle=true&s_tag=sBp-54du"
              target="_blank"
            >
              local airbnb options
            </a>
            .
          </Paragraph>
          <Title3>Transport</Title3>
          <Paragraph>
            For everyone staying at the Angel/in Abergavenny town, transport to
            and from the wedding field will be provided. We’ll be in touch to
            confirm numbers closer to the date!
          </Paragraph>

          <Title2>WTF IS ABERGAVENNY</Title2>
          <Paragraph>
            A pretty, little welsh town, about 20 mins from Lydia’s house and
            the wedding field. It has{' '}
            <a href="http://artshopandgallery.co.uk/" target="_blank">
              cute coffee shops
            </a>
            /art galleries,{' '}
            <a href="https://www.theangelbakery.com/" target="_blank">
              bakeries
            </a>
            , award-winning, sausage-making butchers,{' '}
            <a href="http://www.castlewales.com/abergav.html" target="_blank">
              historical ruins
            </a>
            ,{' '}
            <a
              href="https://www.nationaltrust.org.uk/sugarloaf-and-usk-valley/features/the-sugarloaf"
              target="_blank"
            >
              hikes
            </a>{' '}
            and weekend{' '}
            <a href="http://abergavennynow.com/abergavenny-market/">
              craft/food markets
            </a>
            .
          </Paragraph>
          <Title2>AND HOW DO I GET THERE</Title2>
          <Paragraph>
            To get to Abergavenny from London, either take a train to Newport,
            South Wales and get a taxi or change at Newport for Abergavenny
            station. Uber has not yet reached rural Wales, so here are some
            local taxi numbers:{' '}
            <a href="http://dragontaxis.com/newport/" target="_blank">
              Dragon (Base in Newport)
            </a>
            ,{' '}
            <a href="http://www.lewistaxisofabergavenny.co.uk/" target="_blank">
              Lewis (Based in Abergavenny)
            </a>
          </Paragraph>

          <Title2>Transport</Title2>
          <Paragraph>
            For everyone staying at the Angel/in Abergavenny town, transport to
            and from the wedding field will be provided. We’ll be in touch to
            confirm numbers closer to the date!
          </Paragraph>
        </Column>
      </BackgroundContent>
    )
  }
}
