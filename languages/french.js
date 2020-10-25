const { emojis, discord } = require("../config");

module.exports = {

    locale: "fr_FR",

    errors: {
        missingPerms: (neededPermissions) => `__**${emojis.error} Permissions manquantes**__\n\n\nJ'ai besoin des autorisations suivantes pour que cette commande fonctionne correctement : ${neededPermissions.map((p) => "`"+p+"`").join(", ")}`,
        disabled: () => `${emojis.error} Cette commande est actuellement désactivée !`,
        permLevel: (name) => `${emojis.error} Cette commande nécessite l'autorisation : \`${name}\`!`,
        sendPerm: () => `${emojis.error} Je n'ai pas la permission d'envoyer des messages sur ce channel.`,

        user: () => `${emojis.error} Impossible de résoudre l'argument \`user\`.`,
        role: () => `${emojis.error} Impossible de résoudre l'argument \`role\`.`,
        channel: () => `${emojis.error} Impossible de résoudre l'argument \`channel\`.`,
        action: () => `${emojis.error} Impossible de résoudre l'argument \`action\`.`
    },
    
    // 
    // HELP DESCRIPTIONS
    // 

    help: {
        description: (guildName, prefix) => `Je suis un bot polyvalent qui fait de la musique, de la modération et d'autres choses amusantes et utiles. 
        Faites \`${prefix}help <command>\` pour obtenir des informations détaillées sur une commande.
        \n[Ajouter le bot à votre serveur](https://discord.com/api/oauth2/authorize?client_id=740539000615469106&permissions=8&scope=bot) | [Rejoignez notre serveur Discord](https://discord.gg/3y2ByKq)`,
         
        fields:{
            settings: () => ":wrench: Paramètres",
            moderation: () => ":hammer: Modération",
            music: () => ":notes: Musique",
            fun: () => ":100: Fun",
            info: () => ":information_source: Info"
        },

        fun:{
            coinflip: {
                description: (prefix) => "Lance une pièce de monnaie."
            },
            dog: {
                description: (prefix) => "Photo de chien prise au hasard."
            },
            meme: {
                description: (prefix) => "Envoie un meme dans le channel."
            },
            rolldice: {
                description: (prefix) => "Lance un dé."
            },
        },
        
        info:{
            help: {
                description: (prefix) => ""
            },
            vote: {
                description: (prefix) => ""
            },
            serverinfo: {
                description: (prefix) => "Donne toutes les informations à propos du serveur."
            },
            ping: {
                description: (prefix) => "Pong!"
            },
            info: {
                description: (prefix) => ""
            },
            whois: {
                description: (prefix) => "Donne toutes les informations à propos d'un utilisateur."
            }
        },

        moderation:{
            ban: {
                description: (prefix) => "Banni un utilisateur du serveur."
            },
            clean: {
                description: (prefix) => "Supprime un nombre de messages du channel."
            },
            embedsay: {
                description: (prefix) => "Ecris un message en embed à la place du bot."
            },
            giveaway: {
                description: (prefix) => "Créé un concours et séléctionne un utilisateur parmis les réactions."
            },
            history: {
                description: (prefix) => "Affiche toutes les sanctions reçu par l'utilisateur."
            },
            kick: {
                description: (prefix) => "Kick un utilisateur du serveur."
            },
            mute: {
                description: (prefix) => "Rend muet un utilisateur du serveur sur tous les channels."
            },
            poll: {
                description: (prefix) => `Créez un sondage de réaction en tapant \`${prefix}poll "votre message"\`. Le bot ajoutera automatiquement les réactions :thumbsup :, :thumbsdown :, et :person_shrugging :.\nCréer un sondage de réaction avec plusieurs options en tapant \`${prefix}poll {title} [Option1] [Option2] [Option3].`
            },
            reroll: {
                description: (prefix) => "Relance un tirage de concours."
            },
            say: {
                description: (prefix) => "Ecris un message à la place du bot."
            },
            unban: {
                description: (prefix) => "Révoque le ban d'un utilisateur."
            },
            unmute: {
                description: (prefix) => "Révoque le mute d'un utilisateur."
            },
        },

        music:{
            leave:{
                description: (prefix) => "Arrête la musique."
            },
            play:{
                description: (prefix) => `Joue une musique. \n{\n- Exemples} : \n\n\n{prefix}play pnl blanka - Recherche sur youtube de "pnl blanka" \n\n\n\n{{prefix}play https://youtu.be/u8bHjdljyLw - Lecture d'une vidéo youtube, en utilisant l'URL.`
            },
            queue:{
                description: (prefix) => "Affiche la liste d'attente."
            },
            skip:{
                description: (prefix) => "Passe à la musique suivante de la liste d'attente."
            },
            volume:{
                description: (prefix) => "Règle le volume de la musique."
            }
        },

        settings:{
            accessrole:{
                description: (prefix) => `Définie le role obligatoire pour utiliser les commandes du bot. Utilisez \`${prefix}accessrole disable\` pour désactiver.`
            },
            autorole:{
                description: (prefix) => `Définie le role attribué automatiquement aux nouveaux membres.\n\nExemples : \n\`${prefix}autorole add Members\` - Donne le role \`Members\` aux nouveaux membres.\n\`${prefix}autorole remove Members\` - Retire le role \`Members\` de l'autorole.\n\`${prefix}autorole list\` - Affiche une liste de tous les autoroles.` 
            },
            channeltoggle:{
                description: (prefix) => "Désactive les commandes du bot dans le channel."
            },
            configjoin:{
                description: (prefix) => `Définit un message de bienvenue pour le serveur 
                \nExemples : \n\`${prefix}configjoin #general Bienvenue %member% sur %server%!\` - Envoie \`Bienvenue @alex sur <votre nom de serveur>!\` dans le channel #general quand Alex rejoint votre serveur. 
                \`${prefix}configjoin dm Bienvenue %username% !\` - Accueille un utilisateur sur votre serveur en messages privés. 
                \`${prefix}configjoin disable\` - Désactive les messages de bienvenue. 
                \nVariables : \n- \`%member%\`\n- \`%member_name%\`\n- \`%member_tag%\`\n- \`%membercount%\`\n- \`%server%\``
            },
            configleave:{
                description: (prefix) => `Définit un message d'adieu pour le serveur. 
                \nExemples : \n\`${prefix}configleave #general %username% a quitté %server%... bye bye %username%...\` - Envoie \`alex a quitté <votre serveur>... bye bye alex...\` dans le channel #general quand alex quitte votre serveur. 
                \`${prefix}configleave disable\` - Désactive le message d'adieu.
                \nVariables : \n- \`%member_name%\`\n- \`%member_tag%\`\n- \`%membercount%\`\n- \`%server%\``
            },
            membercount:{
                description: (prefix) => `Afficher le nombre de membres dans un channel.\n\nExemples : \n\`${prefix}membercount %count% Membres\` - Affiche \`142 Membres\`\n\`${prefix}membercount disable\` - Désactive le channel Membercount.`
            },
            prefix:{
                description: (prefix) => `Définit le préfixe de la commande. \n\nExemples : \n\`${prefix}prefix !\` - Fixe le préfixe à ! \n\`${prefix}prefix disable\` - Désactive le préfixe de commande personnalisé.`
            },
            setlang:{
                description: (prefix) => ""
            },
            testjoin:{
                description: (prefix) => "Test des messages de bienvenue."
            },
            testleave:{
                description: (prefix) => "Test des messages d'adieu."
            }

        }
    },

    // 
    // COMMANDS 
    // 

    info: {
        description: (prefix) => `Je suis un bot polyvalent qui fait de la musique, de la modération et d'autres choses amusantes et utiles. 
        Faites \`${prefix}help <command>\` pour obtenir des informations détaillées sur une commande.
        \n[Ajouter le bot à votre serveur](https://discord.com/api/oauth2/authorize?client_id=740539000615469106&permissions=8&scope=bot) | [Rejoignez notre serveur Discord](https://discord.gg/3y2ByKq)`
    },
    
    serverinfo: {
        infos:{
            title: () =>"Informations du serveur :",
            content: (name, id, owner, date) => `
            **▫️ Nom : ** ${name}
            **▫️ ID : ** ${id}
            **▫️ Propriétaire :** ${owner}
            **▫️ Créé le :** ${date}`
        },
        settings:{
            title: () => "Paramètres du serveur :",
            content: (region, verlvl) => `
            **▫️ Region :** ${region}
            **▫️ Niveau de vérification :** ${verlvl}`
        },
        stats:{
            title: () => "Statistiques du serveur :",
            content: (memberCount, channels, roles) => `
            **▫️ Membres :** ${memberCount}
            **▫️ Channels :** ${channels}
            **▫️ Roles :** ${roles}`
        }
    },

    whois: {
        member:{
            title: () =>"Informations de membre :",
            content: (displayName, joined, roles) => `**▫️ Pseudo :** ${displayName}
            **▫️ A rejoins le :** ${joined}
            **▫️ Roles :** ${roles}`
        },
        user:{
            title: () => "Informations d'utilisateur :",
            content: (userid, username, usertag, created) => `**▫️ ID :** ${userid}
            **▫️ Username :** ${username}
            **▫️ Tag :** ${usertag}
            **▫️ Créé le :** ${created}`
        },
        game:{
            title: () => "Joue à",
            content: (game) => `**▫️ Nom :** ${game}`
        }
    },

    accessrole: {
        on: () => `**${emojis.success} Le rôle accessrole a bien été définie.**`,
        off: () => `**${emojis.success} Le rôle accessrole a bien été désactivé.**`
    },

    autorole: {
        on: (rolename) => `**${emojis.success} Le rôle \`${rolename}\` a été ajouté à la liste autorole.**`,
        off: (rolename) => `**${emojis.success} Le rôle \`${rolename}\` a été retiré de la liste autorole.**`
    },

    channeltoggle: {
        on: () => `**${emojis.success} Les commandes sont maintenant activées dans ce channel.**`,
        off: () => `**${emojis.error} Les commandes sont maintenant désactivées dans ce channel.**`,
        onchannel: (channel) => `**${emojis.success} Les commandes sont maintenant activées dans le channel ${channel}.**`,
        offchannel: (channel) => `**${emojis.error} Les commandes sont maintenant désactivées dans le channel ${channel}.**`
    },

    membercount:{
        on: () => `**${emojis.success} Le channel MemberCount a été créé avec succès.**`,
        off: () => `**${emojis.success}Le channel MemberCount a été supprimé avec succès.**`,
        error_previous: () => `**${emojis.error} Vous devez d'abord désactiver le précédent channel MemberCount.**`,
        error_disable: () => `**${emojis.error} Il n'y a pas de channel MemberCount actif sur votre serveur.**`
    },

    configjoin: {
        on: () => `**${emojis.success} Le message de bienvenue a bien été définie.**`,
        off: () => `**${emojis.success} Le message de bienvenue a bien été désactivé.**`
    },

    configleave: {
        on: () => `**${emojis.success} Le message d'adieu a bien été définie.**`,
        off: () => `**${emojis.success} Le message d'adieu a bien été désactivé.**`
    },

    prefix: {
        disable: (prefix) => `**${emojis.success} Préfixe du serveur désactivé. Toutes les commandes doivent maintenant être utilisées comme ceci : \`${prefix}help\`**`,
        success: (prefix) => `**${emojis.success} Préfixe du serveur mis à jour ! Toutes les commandes doivent maintenant être utilisées avec le prefix : \`${prefix}\` ; comme ceci : \`${prefix}help\`.**`
    },

    testjoin: {
        title: () => `**Test messages de bienvenue**`,
        error: () => `**${emojis.error} Vous n'avez pas configuré de message de bienvenue.**`
    },

    testleave: {
        title: () => `**Test messages d'adieu**`,
        error: () => `**${emojis.error} Vous n'avez pas configuré de message d'adieu.**`
    },

    setlang: {
        invalid: () => `**${emojis.error} Vous devez entrer une langue valide !\n\n:flag_fr: Français (\`fr\`)\n:flag_gb: English (\`en\`)**`,
        success: () => `**${emojis.success} Langue mise à jour !**`
    },

    clean: {
        success: (size) => `**${emojis.success} __${size}__ messages supprimés !**`
    },

    ban: {
        error_user: () => `**${emojis.error} Je ne peux pas bannir cet utilisateur.**`,
        error_time: () => `**${emojis.error} L'argument \`time\` doit être compris entre 2 minutes et 2 ans. (2m et 2y)**`,
        title: (mentionedUser, authortag) => `<a:Banned:745761570537341029> ${mentionedUser.user.tag} (id: ${mentionedUser.id}) a été banni par ${authortag}`,
        description: (time, reason) => `**Durée :** ${time}\n**Raison :** ${reason}`,
        dm: {
            title: (servername, authortag) => `<a:Banned:745761570537341029> Vous avez été banni de ${servername} par ${authortag}`,
            description: (time, reason) => `**Durée :** ${time}\n**Raison :** ${reason}`
        }
    },

    kick: {
        error_user: () => `**${emojis.error} Je ne peux pas kick cet utilisateur.**`,
        description: (mentionedUser, authortag, reason) => `${mentionedUser} (id: ${mentionedUser.id}) a été kick par ${authortag}, pour : ${reason}.`,
        dm: {
            title: (servername, authortag) => `Vous avez été kick de ${servername} par ${authortag}`,
            description: (reason) => `\n**Raison :** ${reason}`,
        }
    },

    mute: {
        error_user: () => `**${emojis.error} Vous ne pouvez pas mute cet utilisateur.**`,
        error_time: () => `**${emojis.error} L'argument \`time\` doit être compris entre 2 minutes et 2 ans. (2m et 2y)**`,
        title: (mentionedUser, authortag) => `<a:Banned:745761570537341029> ${mentionedUser.user.tag} (id: ${mentionedUser.id}) a été mute par ${authortag}`,
        description: (time, reason) => `**Durée :** ${time}\n**Raison :** ${reason}`,
        dm: {
            title: (servername, authortag) => `<a:Banned:745761570537341029> Vous avez été mute de ${servername} par ${authortag}`,
            description: (time, reason) => `**Durée :** ${time}\n**Raison :** ${reason}`
        }
    },
    
    unban: {
        error_user: () => `**${emojis.error} Cet utilisateur n'a pas été banni.**`,
        description: (membertag) => `**${emojis.success} Le ban de **${membertag}** a bien été révoqué !**`
    },
    
    unmute: {
        error_user: () => `**${emojis.error} Vous ne pouvez pas unmute cet utilisateur.**`,
        error_role: () => `**${emojis.error} Le rôle \`muted\` n'existe pas.**`,
        description: (membertag) => `**${emojis.success} Le mute de ${membertag} a bien été révoqué !**`
    },

    history: {
        error_sanction: () => `**${emojis.error} L'argument \`sanction\` n'a pas été trouvé.**`,
        error_nosanction: () => `**${emojis.error} Cet utilisateur n'a reçu aucune sanction.**`,
        title: () => `__SANCTIONS__`,
        description: (mentionedUser, content) => `<@${mentionedUser}> (id: ${mentionedUser}) Liste des sanctions :\n ${content}`,
        footer: (nb) => `... ${nb} autres sanction n'ont pas pu être affichées.`
    },

    music: {
        error_voicechannel: () => `**${emojis.error} Vous n'êtes pas dans un channel vocal !**`,
        error_notplaying: () => `**${emojis.error} Je ne joue pas de musique en ce moment !**`,
    },
    
    play: {
        duration: () => "Durée",
        requested: () => "Demandé par",
        queue: () => "Ajouté à la file d'attente : "
    },

    queue: {
        nowplaying: (title, url, time, requester) => `__En cours :__\n[${title}](${url}) | ${time} - Demandé par : *${requester}*\n`,
        upnext: () => `\n__Suivants :__\n`,
        list: (nb, title, url, time, requester) => `${nb}. [${title}](${url}) | ${time} - Demandé par : *${requester}*\n`
    },
    
    skip: {
        skipping: () => "Suivant..."
    },

    volume: {
        error_volume: () => `**${emojis.error} Vous devez saisir un nombre compris entre 0 et 200.**`
    },

    giveaway: {
        giveawayStarted: () => "🎉🎉 **CONCOURS** 🎉🎉",
        giveawayEnded: () => "🎉🎉 **CONCOURS TERMINÉ** 🎉🎉",
        timeRemaining: () => "Temps restant : **{duration}** !",
        inviteToParticipate: () => "Réagissez avec 🎉 pour participer !",
        winMessage: () => "Félicitations, {winners} ! Vous avez gagné **{prize}** !",
        embedFooter: () => "Concours",
        noWinner: () => "Concours annulé, participations non valides.",
        hostedBy: () => "Lancé par: {user}",
        winners: () => "Gagnant(s)",
        endedAt: () => "Fini le",
        units: {
            seconds: () => "secondes",
            minutes: () => "minutes",
            hours: () => "heures",
            days: () => "jours"
        }
    },

    reroll:{
        messages: {
            congrat: () => ":tada: Nouveaux Gagnant(s) : {winners} ! Félicitations !",
            error: () => "Participations non valides, aucun gagnant(s) !"
        },
        error: (args) => `${emojis.error} Aucun concours trouvé pour ${args}, vérifiez et réessayez.`
    }

};