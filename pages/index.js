import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../Components/Layout';

class CampaignIndex extends Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    return { campaigns };
  }

  renderCampaigns() {
    const items = this.props.campaigns.map(address => {
      return {
        header: address,
        description: (
          <Link href={`campaigns/${address}`}>
            View Campaign
          </Link>
          ),
        fluid: true
      };
    });

    return <Card.Group items={items} />;
  }


  render() {
    return (
    <Layout>
      <div>
        <h3>Current Campaigns</h3>

          <Link href="/campaigns/new">
            <Button
              floated="right"
              content="Create Campaign"
              icon="add circle"
              primary
            />
          </Link>


        {this.renderCampaigns()}
      </div>
      </Layout>
    );
  }
}

export default CampaignIndex;

