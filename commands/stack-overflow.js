const Discord = require('discord.js');
const requrest = require('request');
const sec = require('search-engine-client');


module.exports = {
    name: "stack-overflow",
    description: "get an answer to a coding question",

    async run (bot, message, args){
        var searchInput = "stack overflow ";
        for (var idx = 0; idx < args.length; idx++){
            if(idx === 0 && args[idx][0] === "\""){
                args[idx].slice(1);
            }else if(idx === args.length && args[idx][args[idx.length]] === "\""){
                args[idx].slice(0, -1);
                
            }
            searchInput = searchInput + " " + args[idx];
        }
        message.channel.send("calcultating...");
        sec.bing(searchInput).then(function(result) {
            debugger;
            var trimmed = result.links[0].slice(36).toString();
            var questionID = trimmed.slice(0, trimmed.indexOf('/'));
            stack_questions.answers_on_questions(questionID, options , (response) => {
                // response will be json 
                var question_response = JSON.parse(response).items[0];
                var user_display_name = question_response.owner.display_name;
                var user_link = question_response.owner.link;
                var answer_score = question_response.score;
                var answer_id = question_response.answer_id;

                stack_answers.answers_by_ids(answer_id, options , (response) => {
                    console.log(JSON.parse(response));
                    var html_stuff = JSON.parse(response).items[0].body;
                    pdf.create(html_stuff, options).toFile(`./files/${answer_id}.pdf`, function(err, res) {
                        if (err) return console.log(err);
                        console.log(res); // { filename: '/app/businesscard.pdf' }
                    });
                    nodeHtmlToImage({
                        output: `./images/${answer_id}.png`,
                        html: `${html_stuff}`
                    })
                        .then(() => {
                            renderMessage(answer_id, user_display_name, answer_score, searchInput , message);
                            
                        });
                });
            });
        })
    }
}