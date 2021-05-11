//setup stuff
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "-";
const token = "token";
var cron = require('node-cron');


//All that good variable stuff

//Legendary Lost Sectors
// let ListLLS = ['812537132451233804', '812438547805634580']
var elCount = 1
var lCount = 1
var emCount = 0
var mCount = 0

var nameLLS = ['[Concealed Void](https://i.imgur.com/jby7AyZ.jpg)', '[Bunker E15](https://i.imgur.com/GEGTRoE.jpg)', '[Perdition](https://i.imgur.com/H9nrIfQ.jpg)',
	'[Exodus Garden 2A](https://i.imgur.com/4BY8GqL.jpg)', '[Veles Labyrinth](https://i.imgur.com/IwfHMxT.jpg)', '[K1 Logistics](https://i.imgur.com/sYdXnnh.jpeg)',
	'[K1 Communion](https://i.imgur.com/CuEwVbw.jpeg)', '[K1 Crew Quarters](https://i.imgur.com/UdV1Gmc.jpeg)', '[K1 Revelation](https://i.imgur.com/oEeP75Q.jpeg)']
var exotic = ['Helmet', 'Gauntlets', 'Chest Armor', 'Leg Armor']




//The FrameworkTM
var embedLLS = {
	color: 16562691,
	title: "Legendary Lost Sector Rotation",
	fields: [
		{
			name: "Legend",
			value: nameLLS[lCount] + ' (' + exotic[elCount] + ')',
		},
		{
			name: "Master",
			value: nameLLS[mCount] + ' (' + exotic[emCount] + ')'
		}
	]
};


client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (message.content === `${prefix}ping`) {
		message.channel.send('Pong.');
	} else if (message.content === `${prefix}beep`) {
		message.channel.send('Boop.');
	} else if (message.content === `${prefix}server`) {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	} else if (message.content === `${prefix}user-info`) {
		message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
	}
});

const ListLLS = ['812537132451233804', '812438547805634580']


const job = cron.schedule('* * * * * *', () => {
	// This runs a cronjob for every day at 11:00:00
	console.log('Init.')
	const receivedEmbed = message.embeds[0];
	const exampleEmbed = new Discord.MessageEmbed(receivedEmbed).setTitle('New title');
	console.log('Setup')
	for (let ChannelLLSID of ListLLS) {
		console.log(ChannelLLSID);
		client.channels.cache.get(ChannelLLSID).send({embed: embedLLS});
		ChannelLLSID += 1
		console.log('Added 1');
	}
	lCount += 1;
	elCount += 1;
	mCount += 1;
	emCount += 1;
	console.log(lCount + ' ' + elCount + ' ' + mCount + ' ' + emCount);
	if (lCount == 9) {
		lCount -= 9;
	}
	if (mCount == 9) {
		mCount -= 9;
	}
	if (elCount == 4) {
		elCount -= 4;
	}
	if (emCount == 4) {
		emCount -= 4;
	}
});

/*
		console.log('Init 2')
		let LLSChannel = ListLLS[llsi]
		console.log('prep channel')
		LLSChannel.send({
			embed: {
				"title": "Legendary Lost Sector Rotation",
				"color": 16562691,
				"footer": {},
				"fields": [
					{
						"name": "Legend",
						"value": nameLLS[nCount] + ' (' + exotic[eCount] + ')',
					},
					{
						"name": "Master",
						"value": nameLLS[nCount - 1] + ' (' + exotic[eCount - 1] + ')'
					}
				]
			}
		};
		llsi = llsi + 1
		console.log('iterating')
	}
	llsi = 0
	eCount = eCount + 1

	if (eCount = 4) {
		eCount = 0
	}
	nCount = nCount + 1

	if (nCount = 9) {
		nCount = 0
    }
	console.log('Sent!')
	{
	scheduled: false
	}	);

*/

job.start();


client.login(token);
