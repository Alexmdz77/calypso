const db = require('quick.db');
const config = require('../config.json');
const Discord = require("discord.js");

module.exports = async (client, member) => {

	// COLOR 
    var color = config.color;
    let colordb = db.fetch(`color_${member.guild.id}`);
    if(colordb){
        var color = colordb;
    }
	client.color = color;

	let farewellchannel = db.fetch(`farewell_channel_${member.guild.id}`);
	// const farewellrole = db.fetch(`farewell_role_${member.guild.id}`);
	let farewellmessage = db.fetch(`farewell_message_${member.guild.id}`);
	let farewelltype = db.fetch(`farewell_type_${member.guild.id}`);

	if (!farewellchannel) { return; }

	let memberCount;
	await member.guild.members.fetch().then((g) => {
		memberCount = g.filter((member) => !member.user.bot).size;
	});

	var mapObj = {
		"%member%":member.user,
		"%member_name%":member.user.username,
		"%member_tag%":member.user.tag,
		"%membercount%":memberCount,
		"%server%":member.guild.name
	
	};
	var re = new RegExp(Object.keys(mapObj).join("|"),"gi");
	farewellmessage = farewellmessage.replace(re, function(matched){
	return mapObj[matched.toLowerCase()];
	});

	if(farewellchannel.toLowerCase() === "dm"){
		member.user.send(farewellmessage);
	}
	if(!member.guild.channels.cache.get(farewellchannel)){
        db.delete(`farewell_channel_${member.guild.id}`);
        db.delete(`farewell_message_${member.guild.id}`);
		db.delete(`farewell_type_${member.guild.id}`);
		return;
	}
	if(!farewelltype || farewelltype == "message"){
		return member.guild.channels.cache.get(farewellchannel).send(farewellmessage);
	}
	else if(farewelltype == "embed"){
		const embed = new Discord.MessageEmbed()
			.setColor(client.color)
            .setThumbnail(member.user.displayAvatarURL())
			.setTitle(`• ${member.guild.name}`)
			.setDescription(farewellmessage)
			.setFooter(member.guild.name)
			.setTimestamp()
		return member.guild.channels.cache.get(farewellchannel).send(embed);
	}
};
