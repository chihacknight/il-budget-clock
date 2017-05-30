var default_reason = {title: 'We might turn off the lights at government offices. Literally.', source: 'Chicago Tribune', url: 'http://www.chicagotribune.com/news/local/politics/ct-jesse-white-illinois-budget-met-0926-20150925-story.html', date: "Sep 25, 2015"}

var reasons = [
    {title: 'Medicaid patients might stop receiving healthcare.', source: "Progress Illinois", url: 'http://progressillinois.com/news/content/2015/07/23/state-hit-suit-over-hospital-medicaid-payments-during-budget-impasse', date: "Jul 23, 2015"},
    {title: "College students can't afford to return to school because they might have to pay back tuition funds that were supposed to be scholarships.", source: 'Chicago Tribune', url: "http://www.chicagotribune.com/news/local/politics/ct-illinois-budget-impasse-met-20151227-story.html", date: "Dec 27, 2015"},
    {title: "3,600 senior citizens will get Meals on Wheels two days a week instead of five.", source: 'Chicago Tribune', url: "http://www.chicagotribune.com/news/local/politics/ct-illinois-budget-impasse-met-20151227-story.html", date: "Dec 27, 2015"},
    {title: "Thousands of mentally ill clients will be without psychiatric support, including medications.", source: "United Way of Illinois", url: "http://www.unitedwayillinois.org/documents/UWI_Survey_Results_Overview.pdf", date: "Jul 1, 2015"},
    {title: "The state's largest social services agency might cut treatment for drug and alcohol addiction, housing for recently released prisoners, and a shelter for children.", source: "Chicago Tribune", url: "http://www.chicagotribune.com/news/local/politics/ct-bruce-rauner-budget-cuts-met-0126-20160125-story.html", date: "Jan 25, 2016"},
    {title: "Over 100 children and 86 families affected by HIV/AIDS may lose medical, mental health, and transportation services provided by Children’s Place.", source: "Voices for Illinois Children", url: "http://www.voices4kids.org/wp-content/uploads/2015/09/Lack-of-Budget-Dismantling-Critical-State-Services-Final.pdf", date: "Sep 1, 2015"},
    {title: "More than 1,500 kids will lose access to afterschool programming from Teen Reach, with another 572 kids at immediate risk of losing programming.", source: "Voices for Illinois Children", url: "http://www.voices4kids.org/wp-content/uploads/2015/09/Lack-of-Budget-Dismantling-Critical-State-Services-Final.pdf", date: "Sep 1, 2015"},
    {title: "17,500 Illinoisans impacted by domestic violence, eviction, and financial exploitation will lose access to the civil justice system due to funding holds on Civil Legal Aid.", source: "Voices for Illinois Children", url: "http://www.voices4kids.org/wp-content/uploads/2015/09/Lack-of-Budget-Dismantling-Critical-State-Services-Final.pdf", date: "Sep 1, 2015"},
    {title: "Contractors who are building new affordable housing in Illinois and working on emergency repairs in many rural counties are not being paid.", source: "Voices for Illinois Children", url: "http://www.voices4kids.org/wp-content/uploads/2015/09/Lack-of-Budget-Dismantling-Critical-State-Services-Final.pdf", date: "Sep 9, 2015"},
    {title: "Crisis intervention services for runaways and youth at risk of delinquency in Englewood will likely be suspended.", source: "Crain's Chicago Business", url: "http://www.chicagobusiness.com/article/20160126/NEWS02/160129913/list-agencies-and-colleges-hit-by-illinois-budget-impasse", date: "Jan 26, 2016"},
    {title: "Of the 444 agencies surveyed by United Way of Illinois, 85% have reduced the number of clients they serve since July.", source: "United Way of Illinois", url: "http://www.unitedwayillinois.org/documents/UWI_Survey_Results_Overview.pdf", date: "Jul 1, 2015"},
    {title: "Free transportation in Metro East will be put on hold, preventing seniors from getting to doctor appointments.", source: "Fox 2 Now - St. Louis", url: "http://fox2now.com/2016/01/25/illinois-budget-impasse-is-forcing-social-services-to-find-new-funding/", date: "Jan 25, 2016"},
    {title: "Afterschool and technology programs run by Erie Neighborhood House, a group that helps low-income families, were cut.", source: "Crain's Chicago Business", url: "http://www.chicagobusiness.com/article/20160126/NEWS02/160129913/list-agencies-and-colleges-hit-by-illinois-budget-impasse", date: "Jan 26, 2016"},
    {title: "Chicago State University no longer has enough money to pay employees.", source: "Crain's Chicago Business", url: "http://www.chicagobusiness.com/article/20160126/NEWS02/160129913/list-agencies-and-colleges-hit-by-illinois-budget-impasse", date: "Jan 26, 2016"},
    {title: "Lutheran Social Services, the state’s largest social service agency, must lay off 43% of its staff.", source: "Fox 32 Chicago", url: "http://www.fox32chicago.com/news/local/82583800-story", date: "Jan 26, 2016"},
    {title: "Human service agencies have taken on $35 million in debt to cover the budget shortfall.", source: "PR Newswire", url: "http://www.prnewswire.com/news-releases/seven-months-into-state-budget-impasse-united-way-of-illinois-survey-shows-extensive-cuts-to-human-service-programs-and-harm-to-sector-300209500.html", date: "Jan 26, 2016"},
    {title: "The state may lose $10.1 billion in financial investments.", source: "Capitol Fax", url: "http://capitolfax.com/2015/10/02/frerichs-warns-of-impasse-consequences/", date: "Oct 2, 2015"},
    {title: "Claims or premiums for 150,000 state employees, retirees, and families have gone unpaid, forcing providers to refuse patients who can’t pay their full bill upfront.", source: "KFVS 12", url: "http://www.kfvs12.com/story/31027657/il-budget-impasse-could-affect-doctor-visits-for-state-employees", date: "Jan 21, 2016"},
    {title: "While Illinois workers continue to pay into the state health insurance plan, Illinois is not releasing funds to healthcare providers for services.", source: "KFVS 12", url: "http://www.kfvs12.com/story/31027657/il-budget-impasse-could-affect-doctor-visits-for-state-employees", date: "Jan 21, 2016"},
    {title: "A detox drug program was forced to close.", source: "Journal Courier", url: "http://myjournalcourier.com/news/85577/budget-impasse-shutters-detox-program", date: "Sept 5, 2015"},
    {title: "$107 million in funds dedicated to affordable housing are going unused, leaving 172,000 people in in a lurch.", source: "Housing Action Illinois", url: "http://housingactionil.org/2015/12/21/due-to-state-budget-impasse-more-than-107-million-in-dedicated-funds-for-affordable-housing-are-going-unused/", date: "Dec 21, 2015"},
    {title: "Approximately 735 projects at about 135 different Illinois state parks are on indefinite hold.", source: "Reboot Illinois", url: "http://www.rebootillinois.com/2015/08/26/editors-picks/katie-drews/financial-crisis-taking-720-million-toll-on-illinois-state-parks-investigation-finds/44753/", date: "Aug 26, 2016"},
    {title: "YMCA of Metropolitan Chicago was forced to cancel its Teen Reach programming at three of its Chicago centers, including the Rauner Family YMCA in Little Village.", source: "Progress Illinois", url: "http://progressillinois.com/posts/content/2016/01/26/social-service-advocates-speak-out-ahead-rauners-state-state-address", date: "Jan 26, 2016"},
    {title: "Illinois’ 12 public universities and 48 community colleges have been without any state funding for nearly seven months.", source: "The Southern Illinoisan", url: "http://thesouthern.com/news/local/educators-legislators-clash-with-rauner-over-letter/article_c4dbb5d4-b845-5d04-9a0a-f4d4727053db.html", date: "Jan 24, 2016"},
    {title: "Police training classes across the state have been canceled.", source: "Chicago Tribune", url: "http://www.chicagotribune.com/news/local/breaking/ct-police-training-illinois-budget-20150927-story.html", date: "Sept 27, 2015"},
    {title: "75,000 Illinois domestic violence victims will lose services.", source: "Reboot Illinois", url: "http://www.rebootillinois.com/2015/09/30/editors-picks/emily-miller/budget-cuts-put-illinois-domestic-violence-victims-in-peril/46664/", date: "Sept 30, 2015"},
    {title: "More than 15,000 women will not receive potentially life-saving breast and cervical cancer screenings.", source: "Responsible Budget Coalition", url: "http://www.responsiblebudget.org/sites/default/files/content/pdfs/State%20of%20Our%20State%20Full%20FIN%20-%2001.26.15.pdf", date: "Jan 26, 2016"},
    {title: "The state has yet to pay Illinois State Fair butter sculptor the $2,500 she’s owed for sculpting a butter cow.", source: "NPR", url: "http://www.npr.org/2015/12/08/458959374/illinois-budget-crisis-reveals-cost-of-state-fair-butter-sculptures", date: "Dec 8, 2015"},
    {title: "The Baby Fold residential treatment center in Normal, IL has been forced to close.", source: "Pantagraph", url: "http://www.pantagraph.com/news/local/baby-fold-to-close-residential-treatment-center/article_ebdac8fc-622b-5ace-9158-6725186b0b2c.html", date: "May 26, 2017"}
    ,
    {title: "Northeastern Illinois University has been forced to cut 180 jobs.", source: "Capitol Fax", url: "https://capitolfax.com/2017/05/30/neiu-to-cut-180-jobs/", date: "May 30, 2017"}
]
var indices = []
$.each(reasons, function( index, value ) {
    indices.push(index);
});

var i = 0;

var clock;

// start counting July 2, 2015 12am GMT-6
var start_date =    moment("2015-07-02T17:00:00.000Z");

updateClock();

setInterval(function(){
    updateClock();
}, 1000);

function updateClock(){
    clock = moment(moment().diff(start_date));
    // console.log(clock)
    $("#years").html(clock.get('year') - 1970);
    $("#months").html(clock.get('month'));
    $("#days").html(clock.get('date'));
    $("#hours").html(clock.get('hour'));
    $("#minutes").html(clock.get('minute'));
    $("#seconds").html(clock.get('second'));
}

function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

function renderReason(reason){
    var reason_date = "";
    if (reason['date'])
        reason_date = " - <em>" + reason['date'] + "</em>";
    $("#reason").html(reason['title']+'<br /><span  class="small">Source: <a href="'+reason['url']+'" target="blank">' + reason['source'] + '</a>'+ reason_date + '</span>');
}


$('#do-something').hide();

if($.address.parameter("reason") && parseInt($.address.parameter("reason"))<reasons.length){
    renderReason(reasons[parseInt($.address.parameter("reason"))])
}
else{
    renderReason(default_reason)
}


shuffle(indices);
$('#more').on('click', function(e){

    $.address.parameter('reason', indices[i]);
    $('#reason').fadeOut().delay(200).fadeIn()
    window.setTimeout(function () {
        renderReason(reasons[indices[i]]);
        i = (i+1) % reasons.length;
        }, 500);

})

$('#call-to-action-btn').on('click', function(e){
    $('#do-something').slideDown(function(){ $('html, body').animate({
            scrollTop: $("#do-something").offset().top
         }, 500); });
    
    _trackClickEventWithGA('Click', 'Do something', 'Do something')
})