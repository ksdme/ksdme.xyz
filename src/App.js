import './App.css';

import React, { Component } from 'react';

import Link from './components/Link/Link';
import Label from './components/Label/Label';
import LabelSet from './components/LabelSet/LabelSet';

const blocks = [
  {
    'GitHub': 'https://github.com/ksdme',
    'GitLab': 'https://gitlab.com/ksdme',
    'Telegram': 'https://t.me/ksdme',
    'Gitter': 'https://gitter.im/ksdme',
    'StackOverflow': 'https://stackoverflow.com/users/8545463/ksdme',
    'dribbble': 'https://dribbble.com/ksdme',
  },{
    'DockerHub': 'https://hub.docker.com/u/ksdme',
    'Reddit': 'https://reddit.com/u/ksdme97',
    'Twitter': 'https://twitter.com/ksdme',
    'Instagram': 'https://instagram.com/ksdme97',  
    'Medium': 'https://medium.com/@ksdme',
    'Pocket': 'https://getpocket.com/@ksdme',
  },
  {
    'Wikipedia': 'https://en.wikipedia.org/wiki/User:Ksdme9', 
    'Steam': 'https://steamcommunity.com/profiles/76561198321048468',
    'LinkedIn': 'https://www.linkedin.com/in/ksdme',
    'OpenHub': 'https://www.openhub.net/ksdme',
    'ghuser': 'https://ghuser.io/ksdme',
    'meetup': 'https://www.meetup.com/members/231201583/',
  },
  {
    'Quora': 'https://www.quora.com/profile/Kilari-Teja',
    'Hacker News': 'https://news.ycombinator.com/user?id=ksdme',
    'HackerRank': 'https://www.hackerrank.com/ksdme?hr_r=1',
    'devRant': 'https://devrant.com/users/ksdme',
    'Mail': 'mailto:ksdme9@gmail.com',
    'Web': 'https://ksdme.xyz',
  },
];

class App extends Component {

  state = {
    links: blocks,
  };

  render() {
    const labelSets = this.state.links.map((set) => {
      const labels = Object.keys(set).map((display) => {
        return <Label><Link href={set[display]}>{ display }</Link></Label>;
      });

      return <LabelSet>{ labels }</LabelSet>;
    });

    return (
      <div className='content forced-center'>
        { labelSets }
      </div>
    );
  }

}

export default App;
