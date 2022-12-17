const express = require('express')
const app = express()
const config = require('../config');
const axios = require('axios');
const fs = require('fs')

app.get('/content/api/pages/fortnite-game', async (req, res) => {

    const data = await axios.get('https://fortnitecontent-website-prod07.ol.epicgames.com/content/api/pages/fortnite-game');

    const banner = config.banner;
    const background = config.background;

    data.data.emergencynoticev2 = {
        'jcr:isCheckedOut': data.data.emergencynoticev2['jcr:isCheckedOut'] || true,
        _title: data.data.emergencynoticev2._title || 'emergencynoticev2',
        _noIndex: data.data.emergencynoticev2._noIndex || false,
        'jcr:baseVersion': data.data.emergencynoticev2['jcr:baseVersion'] || 'a7ca237317f1e7da533b38-74ee-468b-8c63-a7c3c256b313',
        emergencyNotices: {
            _type: data.data.emergencynoticev2.emergencynotices._type || 'Emergency Notices',
            emergencynotices: [
                {
                    hidden: false,
                    _type: 'CommonUI Emergency Notice Base',
                    title: 'Atomic',
                    body: 'Atomic Hybrid by Foco & Psycho\nhttps://dsc.gg/AtomicFN',
                }
            ]
        },
        _activeDate: data.data.emergencynoticev2._activeDate || '2018-08-06T19:00:26.217Z',
        lastModified: data.data.emergencynoticev2.lastModified || '2021-05-10T19:37:21.335Z',
        _locale: data.data.emergencynoticev2._locale || 'en-US',
    }

    data.data.subscription = data.data.subscription;
    data.data.shopSections = data.data.shopSections;

    data.data.battleroyalenewsv2 = {
        news: {
            motds: [{
                entryType: 'Website',
                image: banner,
                tileImage: banner,
                videoMute: false,
                hidden: false,
                tabTitleOverride: 'Atomic',
                _type: 'CommonUI Simple Message MOTD',
                title: 'Atomic',
                body: 'By Psycho And Foco',
                videoLoop: false,
                videoStreamingEnabled: false,
                sortingPriority: 0,
                id: 'CSNews',
                videoAutoplay: false,
                videoFullscreen: false,
                spotlight: false,
                websiteURL: 'https://discord.gg/stormdev',
                websiteButtonText: 'Join Discord'
            }]
        },
        'jcr:isCheckedOut': data.data.battleroyalenewsv2['jcr:isCheckedOut'] || true,
        _title: 'battleroyalenews',
        _noIndex: false,
        alwaysShow: false,
        'jcr:baseVersion': data.data.battleroyalenewsv2['jcr:baseVersion'] || 'a7ca237317f1e7546d8fe7-0d7a-4312-9e37-a20f1c4333b0',
        _activeDate: data.data.battleroyalenewsv2._activeDate || '2020-01-21T14:00:00.000Z',
        lastModified: data.data.battleroyalenewsv2.lastModified || new Date().toISOString(),
        _locale: data.data._locale || 'en-US'
    };
    data.data.shopCarousel = {
      'jcr:isCheckedOut': data.data.shopCarousel['jcr:isCheckedOut'] || true,
      itemsList: {
         _type: 'ShopCarouselItemList',
         items: [{       
           tileImage: 'https://media.discordapp.net/attachments/973471317686911017/1036011016351383622/secret.png',
           fullTitle: 'Atomic Shop',
           hidden: false,
           _type: 'ShopCarouselItem',
           landingPriority: 100,
           action: 'ShowOfferDetails',
           offerId: null,
           title: 'Atomic Shop'
           }]
       },
        _title: 'shop-carousel',
        _noIndex: false,
        'jcr:baseVersion': 'a7ca237317f1e765be23f9-d0fd-4067-ae00-ef29af2376cc',
        _activeDate: '2020-09-25T12:00:00.000Z',
        lastModified: new Date().toISOString(),
        _locale: 'en-US'
     },
    data.data.dynamicbackgrounds = {
        'jcr:isCheckedOut': data.data.dynamicbackgrounds['jcr:isCheckedOut'] || true,
        backgrounds: {
            backgrounds: [
                {
                    backgroundimage: 'https://media.discordapp.net/attachments/973471317686911017/1037075869488910346/unknown.png',
                    stage: 'Defaultnotris',
                    _type: 'DynamicBackground',
                    key: 'lobby'
                }
            ],
            _type: 'DynamicBackgroundList'
        },
        _title: 'dynamicbackgrounds',
        _noIndex: false,
        'jcr:baseVersion': 'a7ca237317f1e70712af90-59fe-4576-8f32-f80bf513c946',
        _activeDate: '2020-01-21T14:00:00.000Z',
        lastModified: new Date().toISOString(),
        _locale: 'en-US'
    };

    res.json(data.data);
})

app.all("/api/v1/fortnite-br/surfaces/motd/target", (req,res) => {
  const data = {
	"contentType": "collection",
	"contentId": "motd-default-collection",
	"tcId": "cca20b46-eb7d-4852-94b9-8479ddb53b2d",
	"contentItems": [
		{
			"contentType": "content-item",
			"contentId": "753b2fed-a492-4e11-a34f-9741cc739d47",
			"tcId": "9b89584d-0711-4269-980d-09d50d04f857",
			"contentFields": {
				"body": "Discord Server - https://dsc.gg/atomicfn",
				"entryType": "Text",
				"image": [
					{
						"width": 1920,
						"height": 1080,
						"url": "https://media.discordapp.net/attachments/973471317686911017/1036324161792000070/secret.png"
					},
					{
						"width": 960,
						"height": 540,
						"url": "https://i.imgur.com/SihAyEJ.jpeg"
					}
				],
				"tabTitleOverride": "Atomic Hybrid Server",
				"tileImage": [
					{
						"width": 1024,
						"height": 512,
						"url": "https://i.imgur.com/SihAyEJ.jpeg"
					}
				],
				"title": "Atomic Hybrid Server",
				"videoAutoplay": false,
				"videoLoop": false,
				"videoMute": false,
				"videoStreamingEnabled": false
			},
			"contentSchemaName": "MotdTextNewsWithVideo"
		}
	]
}
  res.json(data)
})




module.exports = app
//Sunset - https://eurovision-api.qtfraz.repl.co/slushyfn/848c90b3fdacf79ba9299706be8ed5b5.png

//Blue Night - https://eurovision-api.qtfraz.repl.co/slushyfn/ef4c967d7c0a90edc5b5aa51a8b8033a.png

// Pastel blue bg https://eurovision-api.qtfraz.repl.co/slushyfn/ef4c967d7c0a90edc5b5aa51a8b8033a.png