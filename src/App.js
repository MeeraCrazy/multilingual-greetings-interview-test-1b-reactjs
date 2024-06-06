import {Component} from 'react'

import TabItem from './TabItem'
import ListImage from './ListImage'

import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {
    activeTabId: languageGreetingsList[0].id,
  }

  changeTabItem = tabItem => {
    this.setState({activeTabId: tabItem})
  }

  greetingFilter = () => {
    const {activeTabId} = this.state

    const filteredGreeting = languageGreetingsList.filter(
      eachItem => eachItem.id === activeTabId,
    )

    return filteredGreeting
  }

  render() {
    const {activeTabId} = this.state
    const filteredGreeting = this.greetingFilter()
    return (
      <div className="app-container">
        <h1 className="language-heading">Multilingual Greetings</h1>
        <ul className="button-list">
          {languageGreetingsList.map(eachLanguage => (
            <TabItem
              key={eachLanguage.id}
              languageDetails={eachLanguage}
              isActive={eachLanguage.id === activeTabId}
              changeTabItem={this.changeTabItem}
            />
          ))}
        </ul>
        {filteredGreeting.map(eachImage => (
          <ListImage key={eachImage.id} imageDetails={eachImage} />
        ))}
      </div>
    )
  }
}

export default App
