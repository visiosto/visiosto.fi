// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import styled from 'styled-components';
import { useIntl } from 'react-intl';
import { CalendarIcon, DeviceDesktopIcon, NorthStarIcon, PencilIcon } from '@primer/octicons-react';

import Break from '../components/Break';
import Button from '../components/Button';
import Card from '../components/Card';
import IndexCover from '../components/IndexCover';
import Intl from '../components/Intl';
import Layout from '../components/Layout';
import StoryCover from '../components/StoryCover';
import Theme from '../components/Theme';

import createIntl from '../utils/createIntl';

import theme from '../theme';

const IndexPage = (props) => {
  const i = createIntl(useIntl());

  const H2 = styled.h2`
    font-size: 2.2rem;
    text-align: center;
  `;

  const Section = styled.section`
    margin: 2em ${(props) => props.theme.layout.marginPhone};

    @media screen and ${(props) => props.theme.devices.phoneLarge} {
      margin: 2em ${(props) => props.theme.layout.marginTablet};
    }

    @media screen and ${(props) => props.theme.devices.tablet} {
      margin: 2em
        ${(props) =>
          props.lesserMargin ? props.theme.layout.marginTablet : props.theme.layout.marginDesktop};
    }
  `;

  const Cards = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 2em;
    justify-items: center;
    align-items: center;
    justify-content: space-evenly;
    align-content: center;

    @media screen and ${(props) => props.theme.devices.phoneLarge} {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 2em;
    }

    @media screen and ${(props) => props.theme.devices.tablet} {
      grid-template-columns: repeat(3, 1fr);
      column-gap: 2em;
    }
  `;

  const Icon = styled.div`
    text-align: center;
  `;

  return (
    <Layout
      title={i('indexTitle')}
      home
      lang={props.pageContext.lang}
      pageKey={props.pageContext.key}
    >
      <IndexCover title={i('indexCoverTitle')}>
        <p>{i('indexCoverContent')}</p>
      </IndexCover>
      <StoryCover title={i('indexStoryTitle')}>
        <p>{i('indexStoryContent')}</p>
      </StoryCover>
      <Break color={'orange'} />
      <Section lesserMargin={true}>
        <H2 id={i('indexServicesId')}>{i('indexServicesTitle')}</H2>
        <Cards>
          <Card title={i('indexServicesWebTitle')} icon={<DeviceDesktopIcon size={'large'} />}>
            <p>{i('indexServicesWebContent')}</p>
            <Button to="#">Lue lisää</Button>
          </Card>
          <Card title={i('indexServicesDesignTitle')} icon={<PencilIcon size={'large'} />}>
            <p>{i('indexServicesDesignContent')}</p>
          </Card>
          <Card title={i('indexServicesEventsTitle')} icon={<CalendarIcon size={'large'} />}>
            <p>{i('indexServicesEventsContent')}</p>
          </Card>
        </Cards>
      </Section>
      <Break color={'turquoise'} />
      <Section>
        <Icon>
          <NorthStarIcon size={'large'} />
        </Icon>
        <H2 id={i('indexPortfolioId')}>{i('indexPortfolioTitle')}</H2>
      </Section>
    </Layout>
  );
};

const Index = (props) => (
  <Intl locale={props.pageContext.lang}>
    <Theme>
      <IndexPage {...props} />
    </Theme>
  </Intl>
);

export default Index;
