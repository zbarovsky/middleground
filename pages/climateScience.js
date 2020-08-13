import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import ArticleCard from './ArticleCard'


export default function TopicPage() {
  let media = [ 
    {
      image: "/cnn.png",
      outlet: "CNN",
      name: "Dr. Sanjay Gupta: Why I am not sending my kids back to school",
      subtitle: "By the first week of August, 90 children in the US had died of COVID-19, which represents less than 1% of all deaths.",
      url: "https://www.cnn.com/2020/08/12/health/covid-kids-school-gupta-essay/index.html"
    },
    {
      image: "/fox.png",
      outlet: "Fox News",
      name: "Dr. Marc Siegel details risks to children if schools don't reopen",
      subtitle: "In the meantime, let's show our kids courage. Dr. Siegel says.",
      url: "https://www.foxnews.com/health/school-open-kids-children-coronavirus-covid"
    },
    {
      image: "/washingtonPost.png",
      outlet: "The Washington Post",
      name: "Stop justifying school reopening based on false statements",
      subtitle: "These statements are being used to justify school reopening, and they're just not true.",
      url: "https://www.washingtonpost.com/opinions/2020/08/11/children-schools-coronavirus-leana-wen/"
    },
    {
      image: "/trump.png",
      outlet: "Washington Examiner",
      name: "Trump school reopening strategy on track to fial politically: GOP operatives",
      subtitle: "Republican strategies are warning that President Trump's push to reopen schools will flop with critical suburban voters. ",
      url: "https://www.washingtonexaminer.com/news/campaigns/trump-school-reopening-strategy-on-track-to-fail-politically-gop-operatives"
    },
    {
      image: "/theHill.png",
      outlet: "The Hill",
      name: "6 in 10 oppose fully reopening schools: poll",
      subtitle: "The percentage is a slight increase from last month, when 53% of voters were against a full reopening.",
      url: "https://thehill.com/homenews/news/511639-6-in-10-oppose-fully-reopening-schools-polltten.com/200/100"
    },
  ]

    
  const cards = media.map((article) => 
    <ArticleCard media={article}/>
  )

  // const timerTransition = () => {

  // }

  
  
    
  return (
    <>
    <div>
      {cards}
    </div>
    <button id="continue" onClick={timerTransition}>Continue</button>
  </>
  )
}