// mock response from the api to use in the tests
const mockApiResponseSuccess = {
  "articles": [
    {
      "source": {
        "id": "al-jazeera-english",
        "name": "Al Jazeera English"
      },
      "author": "Al Jazeera",
      "title": "Maduro: 'Coup attempt' defeated as police clash with protesters - Al Jazeera English",
      "description": "President Maduro declares victory over alleged coup attempt saying those behind it will not go unpunished.",
      "url": "https:\/\/www.aljazeera.com\/news\/2019\/05\/maduro-coup-attempt-defeated-police-clash-protesters-190501053933415.html",
      "urlToImage": "https:\/\/www.aljazeera.com\/mritems\/Images\/2019\/5\/1\/f8cc2c622be846b5b049f09206901f1a_18.jpg",
      "publishedAt": "2019-05-01T10:16:00Z",
      "content": "Demonstrators clashed with police on the streets of the Venezuelan capital on Tuesday, spurred by opposition leader Juan Guaido's call on the military to rise up against President Nicolas Maduro, who said he had defeated an attempted coup.\r\nAn apparently care\u2026 [+3107 chars]"
    },
    {
      "source": {
        "id": "the-new-york-times",
        "name": "The New York Times"
      },
      "author": null,
      "title": "One Image of Japan\u2019s Royals Tells a Story of Demographic Crisis - The New York Times",
      "description": "Emperor Naruhito\u2019s ascension ceremony offered striking visual evidence of the imperial family\u2019s looming existential crisis: It has precious few heirs left.",
      "url": "https:\/\/www.nytimes.com\/2019\/05\/01\/world\/asia\/emperor-japan-women-royal-family.html",
      "urlToImage": "https:\/\/static01.nyt.com\/images\/2019\/05\/01\/world\/01emperor-1sub\/01emperor-1sub-facebookJumbo.jpg",
      "publishedAt": "2019-05-01T10:03:08Z",
      "content": "Whats wrong with a female emperor, I wonder? said Yukiko Minegishi, 41, who works at a uniform maker in Tokyo and had come to the palace with her mother.\r\nShe added that the prohibition against women in the line of succession was, like other gender-related tr\u2026 [+1080 chars]"
    },
    {
      "source": {
        "id": "nbc-news",
        "name": "NBC News"
      },
      "author": "F. Brinley Bruton, Reuters, Associated Press",
      "title": "Malak al-Shehri speaks out after Saudi Arabia detains husband - NBC News",
      "description": "It is not known why Ayman al-Drees was detained in Saudi Arabia on April 4. But the Bowling Green State University graduate is married to a prominent feminist.",
      "url": "https:\/\/www.nbcnews.com\/news\/world\/malak-al-shehri-speaks-out-after-saudi-arabia-detains-husband-n999976",
      "urlToImage": "https:\/\/media2.s-nbcnews.com\/j\/newscms\/2019_18\/2841471\/190501-saudi-dissident-cs-655_8a866092b816d66fbe0378b0b39ab658.nbcnews-fp-1200-630.jpg",
      "publishedAt": "2019-05-01T10:02:00Z",
      "content": "Breaking News Emails\r\nGet breaking news alerts and special reports. The news and stories that matter, delivered weekday mornings.\r\nSUBSCRIBE\r\nMay 1, 2019, 10:02 AM UTC\r\nNEW YORK An unmarked car sat in the street waiting overnight for Ayman al-Drees before fol\u2026 [+6661 chars]"
    },
    {
      "source": {
        "id": "mashable",
        "name": "Mashable"
      },
      "author": "Sam Haysom",
      "title": "This 'Game of Thrones' fan predicted the ending of the Battle of Winterfell a year ago - Mashable",
      "description": "Impressive.",
      "url": "https:\/\/mashable.com\/article\/game-of-thrones-fan-predicted-how-night-king-would-die\/",
      "urlToImage": "https:\/\/mondrian.mashable.com\/2019%252F05%252F01%252Fa8%252Fc1b5adf6569c489597dce2195e63ecec.b09ca.jpg%252F1200x630.jpg?signature=rpI_WkDTLcMI4XuaZfvppOhGnqE=",
      "publishedAt": "2019-05-01T09:29:00Z",
      "content": "Warning: Contains stabby spoilers for Game of Thrones Season 8, episode three.\r\nThe Battle of Winterfell seemed to divide a lot of Game of Thrones fans. Plenty of people loved it. Others thought it was a bit disappointing. Some basically couldn't see it.\r\nBut\u2026 [+782 chars]"
    },
    {
      "source": {
        "id": "techradar",
        "name": "TechRadar"
      },
      "author": "https:\/\/www.facebook.com\/TechRadar",
      "title": "A huge Facebook redesign is coming - but it's far more than a new website - TechRadar",
      "description": "It's all about community and privacy",
      "url": "https:\/\/www.techradar.com\/news\/facebook-redesign-2019",
      "urlToImage": "https:\/\/cdn.mos.cms.futurecdn.net\/y4pcVzPhGwmuXQ28sTMkB-1200-80.jpg",
      "publishedAt": "2019-05-01T08:58:00Z",
      "content": "After a brutal 2018 that forced Facebook to admit it hasn't got the best reputation when it comes to privacy, Mark Zuckerberg has big plans for the social networking platform in 2019: Facebook is being redesigned.\r\nZuckerberg made the announcements during Fac\u2026 [+3963 chars]"
    },
    {
      "source": {
        "id": "nbc-news",
        "name": "NBC News"
      },
      "author": "Leigh Ann Caldwell, Alex Moe",
      "title": "House Dems ratchet up threats to include fines, possible jail for noncompliant officials - NBC News",
      "description": "House Democrats are threatening to escalate their showdown with the Trump administration with open threats to fine \u2014 or even jail \u2014 officials found in contempt.",
      "url": "https:\/\/www.nbcnews.com\/politics\/congress\/house-dems-ratchet-threats-include-fines-possible-jail-noncompliant-officials-n1000336",
      "urlToImage": "https:\/\/media4.s-nbcnews.com\/j\/newscms\/2019_15\/2818486\/190411-elijah-cummings-cs-144p_b311e908f620008b665646972b892d5c.nbcnews-fp-1200-630.jpg",
      "publishedAt": "2019-05-01T08:51:00Z",
      "content": "Breaking News Emails\r\nGet breaking news alerts and special reports. The news and stories that matter, delivered weekday mornings.\r\nSUBSCRIBE\r\nBy Leigh Ann Caldwell and Alex Moe\r\nWASHINGTON House Democrats are threatening to escalate their showdown with the Tr\u2026 [+5274 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "10tv.com"
      },
      "author": "https:\/\/www.facebook.com\/WBNS10TV\/",
      "title": "Study: Suicide attempts by self-poisoning have more than doubled in young people - 10TV",
      "description": "A new study by Nationwide Children's Hospital and the Central Ohio Poison Center shows more young people are trying to take their own lives by self-poisoning.",
      "url": "https:\/\/www.10tv.com\/article\/study-suicide-attempts-self-poisoning-have-more-doubled-young-people-2019-may",
      "urlToImage": "https:\/\/www.10tv.com\/sites\/default\/files\/styles\/article_image\/public\/images\/2016\/07\/26\/Suicide.jpg?itok=96erc64-",
      "publishedAt": "2019-05-01T08:49:25Z",
      "content": "COLUMBUS, Ohio - Startling results out of a new study by Nationwide Children's Hospital and the Central Ohio Poison Center show more young people are trying to take their own lives by self-poisoning. The study was published online Wednesday in The Journal of \u2026 [+2718 chars]"
    },
    {
      "source": {
        "id": "usa-today",
        "name": "USA Today"
      },
      "author": "Kevin Johnson, Bart Jansen",
      "title": "AG William Barr faces lawmakers for the first time after release of special counsel Robert Mueller's report - USA TODAY",
      "description": "President Trump's new attorney general will field questions from lawmakers for the first time since the end of the special counsel investigation.",
      "url": "https:\/\/www.usatoday.com\/story\/news\/politics\/2019\/05\/01\/ag-william-barr-testimony-congress-senate-judiciary-hearing-robert-muellers-russia-report\/3629808002\/",
      "urlToImage": "https:\/\/www.gannett-cdn.com\/presto\/2019\/04\/20\/USAT\/ca62fc31-0565-463f-b223-b567874cc67f-AP_APTOPIX_Trump_Russia_Probe.JPG?crop=3337,1872,x0,y43&width=3200&height=1680&fit=bounds",
      "publishedAt": "2019-05-01T08:00:00Z",
      "content": "Attorney General Barr announced that the special counsel found that while Russia interfered in the 2016 election, there was \"no collusion\" by Trump.\r\n USA TODAY\r\nWASHINGTON\u00a0\u00a0Attorney General William Barr will face questions from Congress for the first time We\u2026 [+3402 chars]"
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Faith Karimi, CNN",
      "title": "Man is arrested in deadly shooting at UNC Charlotte campus on final day of classes - CNN",
      "description": "A man armed with a pistol opened fire on the final day of classes at the University of North Carolina at Charlotte, killing two people and leaving four others wounded -- three of them critically, authorities said.",
      "url": "https:\/\/www.cnn.com\/2019\/05\/01\/us\/university-of-north-carolina-charlotte-shooting-wednesday\/index.html",
      "urlToImage": "https:\/\/cdn.cnn.com\/cnnnext\/dam\/assets\/190430184116-uncc-lockdown-students-leave-library-super-tease.jpg",
      "publishedAt": "2019-05-01T07:29:00Z",
      "content": "(CNN)A man armed with a pistol opened fire on the final day of classes at the University of North Carolina at Charlotte, killing two people and leaving four others wounded -- three of them critically, authorities said. \r\nGunshots rang out just before 6 p.m. T\u2026 [+5122 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Espn.com"
      },
      "author": null,
      "title": "Pochettino backs Tottenham medical staff over Vertonghen treatment - ESPN",
      "description": "Mauricio Pochettino has backed Tottenham's medical staff after Jan Vertonghen was allowed to play on despite suffering a head injury against Ajax.",
      "url": "http:\/\/www.espn.com\/soccer\/tottenham-hotspur\/story\/3839762\/pochettino-backs-tottenham-medical-staff-over-vertonghen-treatment",
      "urlToImage": "https:\/\/a1.espncdn.com\/combiner\/i?img=%2Fphoto%2F2019%2F0430%2Fr536551_1296x729_16%2D9.jpg",
      "publishedAt": "2019-05-01T06:41:13Z",
      "content": "Tottenham manager Mauricio Pochettino has defended his medical staff for controversially allowing Jan Vertonghen to play on despite suffering a head injury in his side's 1-0 Champions League semifinal first-leg loss to Ajax on Tuesday.\r\n- Miller: Spurs beaten\u2026 [+3441 chars]"
    },
    {
      "source": {
        "id": "fox-news",
        "name": "Fox News"
      },
      "author": "Brie Stimson",
      "title": "Huge 'God of Chaos' asteroid to pass near earth in 2029: report - Fox News",
      "description": "A 1,110-foot asteroid will fly past earth in 2029 within the distance of some orbiting spacecraft, according to reports.",
      "url": "https:\/\/www.foxnews.com\/science\/1110-foot-asteroid-to-pass-near-earth-in-2029",
      "urlToImage": "https:\/\/static.foxnews.com\/foxnews.com\/content\/uploads\/2019\/05\/apophis.jpg",
      "publishedAt": "2019-05-01T06:37:31Z",
      "content": "A 1,110-foot-wide\u00a0asteroid named for the Egyptian god of chaos will fly past earth in 2029 within the distance of some orbiting spacecraft, according to reports.\r\nThe asteroid, 99942 Apophis, will come within 19,000 miles of earth\u00a0on April 13, a decade from n\u2026 [+981 chars]"
    },
    {
      "source": {
        "id": "the-hill",
        "name": "The Hill"
      },
      "author": "Tal Axelrod",
      "title": "Ex-Greenville mayor wins Dem primary in North Carolina, GOP candidates head to runoff | TheHill - The Hill",
      "description": "The Republican primary contest for the special election in North Carolina\u2019s 3rd Congressional District is heading to a runoff as two physicians will continue battling to succeed late Rep. Walter Jones (R).",
      "url": "https:\/\/thehill.com\/homenews\/campaign\/441519-ex-greenville-mayor-wins-dem-primary-in-north-carolina-gop-candidates-head",
      "urlToImage": "https:\/\/thehill.com\/sites\/default\/files\/electiondayvotevoting_0501818getty_0.jpg",
      "publishedAt": "2019-05-01T03:02:51Z",
      "content": "The Republican primary contest for the special election in North Carolinas 3rd Congressional District is heading to a runoff as two physicians will continue battling to succeed late Rep. Walter JonesWalter Beaman JonesNorth Carolina reporter says there could \u2026 [+1978 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Express.co.uk"
      },
      "author": "Claire Anderson",
      "title": "Elon Musk SILENT after SpaceX Crew Dragon exploded in SHOCKING failed test - Express.co.uk",
      "description": "ELON MUSK's SpaceX have been silent about an explosion of the Crew Dragon during a failed test of the spacecraft.",
      "url": "https:\/\/www.express.co.uk\/news\/science\/1121215\/spacex-explosion-elon-musk-nasa-news-crew-dragon-test-space-latest",
      "urlToImage": "https:\/\/cdn.images.express.co.uk\/img\/dynamic\/151\/750x445\/1121215.jpg",
      "publishedAt": "2019-05-01T02:28:00Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "Gizmodo.com"
      },
      "author": "Tom McKay",
      "title": "Apple Q2 2019 Earnings Show iPhone Business Stalling, But Services Expanding at Rapid Pace - Gizmodo",
      "description": "Everyone has a theory: Maybe it\u2019s that iPhones are too expensive. Maybe it\u2019s that Apple\u2019s quality control seems weaker, or that they\u2019ve alienated consumers by removing consumer-friendly features like the headphone jack. Maybe it\u2019s that iPhones keep getting mo\u2026",
      "url": "https:\/\/gizmodo.com\/apple-q2-2019-earnings-show-iphone-business-stalling-b-1834433901",
      "urlToImage": "https:\/\/i.kinja-img.com\/gawker-media\/image\/upload\/s--4WhvaUuN--\/c_fill,fl_progressive,g_center,h_900,q_80,w_1600\/r9fjy292smk3pdgd9lfn.jpg",
      "publishedAt": "2019-05-01T02:00:00Z",
      "content": "Everyone has a theory: Maybe its that iPhones are too expensive. Maybe its that Apples quality control seems weaker, or that theyve alienated consumers by removing consumer-friendly features like the headphone jack. Maybe its that iPhones keep getting more an\u2026 [+4406 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Nypost.com"
      },
      "author": "Tamar Lapin",
      "title": "Minnesota cop found guilty of fatally shooting bride-to-be Justine Damond - New York Post ",
      "description": "A Minnesota cop was found guilty Tuesday of fatally shooting Australian bride-to-be Justine Damond after she called 911 to report a possible rape behind her home. It took a jury five hours on Monda\u2026",
      "url": "https:\/\/nypost.com\/2019\/04\/30\/minnesota-cop-found-guilty-of-fatally-shooting-bride-to-be-justine-damond\/",
      "urlToImage": "https:\/\/thenypost.files.wordpress.com\/2019\/04\/190430-mohamed-noor.jpg?quality=90&strip=all&w=1200",
      "publishedAt": "2019-05-01T01:45:00Z",
      "content": "A Minnesota cop was found guilty Tuesday of fatally shooting Australian bride-to-be Justine Damond after she called 911 to report a possible rape behind her home.\r\nIt took a jury five hours on Monday and six on Tuesday to convict Mohamed Noor of third-degree \u2026 [+684 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Youtube.com"
      },
      "author": null,
      "title": "Facebook's F8 Keynote in 7 Minutes: All you need to know - Digital Trends",
      "description": null,
      "url": "https:\/\/www.youtube.com\/watch?v=geJASJsp4uI",
      "urlToImage": null,
      "publishedAt": "2019-05-01T00:40:49Z",
      "content": null
    },
    {
      "source": {
        "id": "fortune",
        "name": "Fortune"
      },
      "author": "Sy Mukherjee",
      "title": "Brainstorm Health: '13 Reasons Why' and Suicide, Philip Morris Device, Medicare for All Hearing - Fortune",
      "description": "Brainstorm Health Daily: April 30, 2019",
      "url": "http:\/\/fortune.com\/2019\/04\/30\/brainstorm-health-daily-04-30-19\/",
      "urlToImage": "https:\/\/fortunedotcom.files.wordpress.com\/2019\/04\/fortune-logo-1600x900-green.jpg",
      "publishedAt": "2019-05-01T00:01:08Z",
      "content": "Good afternoon, readers.\r\nNetflix\u2019s teen drama series 13 Reasons Why drew a fair amount of controversy from critics alleging it romanticized\/normalized\/otherwise simplified issues of self-harm and suicide. For those who don\u2019t know about the series: It centers\u2026 [+1636 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Snopes.com"
      },
      "author": "Snopes",
      "title": "FACT CHECK: Are 'Illegal Immigrants' To Blame for Measles Outbreaks Across the US? - Snopes.com",
      "description": "Some dubious websites have suggested the outbreaks are the result of immigrants who illegally crossed into the U.S. via the Southern border.",
      "url": "https:\/\/www.snopes.com\/fact-check\/immigrants-measles\/",
      "urlToImage": "https:\/\/www.snopes.com\/tachyon\/2019\/04\/GettyImages-481681423.jpg?fit=1024,680",
      "publishedAt": "2019-04-30T23:20:39Z",
      "content": "In early 2019, the United States suffered its worst series of measles outbreaks since 1994. Between 1 January 2019 and 26 April 2019, according to the Centers for Disease Control and Prevention (CDC), 704 individual cases of measles had been confirmed in 22 s\u2026 [+6779 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Vox.com"
      },
      "author": "Li Zhou",
      "title": "Trump Federal Reserve pick Stephen Moore\u2019s sexist writings upset Senate Republicans - Vox.com",
      "description": "If pressure continues to build, he could be forced to withdraw, much like Herman Cain.",
      "url": "https:\/\/www.vox.com\/policy-and-politics\/2019\/4\/30\/18524178\/trump-stephen-moore-federal-reserve-sexist-writings-national-review-senate-republicans",
      "urlToImage": "https:\/\/cdn.vox-cdn.com\/thumbor\/8LFMWmCutgLySCCvsqcNJ1lE4Wg=\/0x0:3680x1927\/fit-in\/1200x630\/cdn.vox-cdn.com\/uploads\/chorus_asset\/file\/16202964\/GettyImages_598116698.jpg",
      "publishedAt": "2019-04-30T22:50:00Z",
      "content": "Herman Cain isnt the only controversial person Trump has considered for the Federal Reserve board. This week, Senate Republicans are wrestling with another pick the president has floated for the financial body: conservative commentator Stephen Moore. \r\nMoore \u2026 [+5170 chars]"
    },
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Jon Fingas",
      "title": "Watch Facebook's F8 2019 keynote in 13 minutes - Engadget",
      "description": "Facebook unveiled a deluge of new features, including for Instagram and WhatsApp -- we've summarized it all in a short video.",
      "url": "https:\/\/www.engadget.com\/2019\/04\/30\/facebook-f8-2019-keynote-highlights\/",
      "urlToImage": "https:\/\/o.aolcdn.com\/images\/dims?resize=1200%2C630&crop=1200%2C630%2C0%2C0&quality=80&image_uri=https%3A%2F%2Fimg.vidible.tv%2Fprod%2F2019-04%2F30%2F5cc8df9f10ca0413cf3aa4ae%2F5cc8e038250420271ce3481f_o_U_v1.jpg&client=amp-blogside-v2&signature=d42bacc0fbb6904590d8c242d69db1f895794307",
      "publishedAt": "2019-04-30T22:47:37Z",
      "content": "Facebook's F8 developer conferences tend to be chock-full of news, and that's truer than ever for 2019. The company's opening keynote brought major changes to just about every corner of Facebook's universe, including a site redesign, a super-lightweight Messe\u2026 [+416 chars]"
    }
  ]
}

export default mockApiResponseSuccess;