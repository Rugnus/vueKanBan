

$(document).ready(function(){
    
    $('.header__switcher_circle').on("click", function(){
        if ($('body').hasClass('dark-theme')) {
            $('.dark-mode').text("Dark mode");
        }else {
            $('.dark-mode').text("Light mode");
        }
        $("body").toggleClass("dark-theme");
    });
    
});
var delay_popup = 1000;
setTimeout("document.getElementById('overlay').style.display='block'", delay_popup);

// COUNTER

// var addPl = new Vue ({
//     el: '.all',
//     data: {
//         taskIsAdded: false,
//         isPageLoaded: true,
//         status: "",
//         user: "",
//         date: "",
//         desci: "",
//         dateHours: "",
//         dateMinutes: "",
//         targ: '',
//         dragid: '',
//         dragstartdate: "",
//         dragdesc: "",
//         dateSeconds: "",
//         finalDate: "",
//         finalDateHours: "",
//         finalDateMinutes: "",
//         finalDateSeconds: "",
//         dateDiff: '',
//         new_task: [
//             {
//                 id: '',
//                 desc: '',
//                 status: '',
//             }
//         ],
//         process: [
//             {
//                 id: '',
//                 desc: '',
//                 status: '',
//                 date: ''
//             }
//         ],
//         done: [
//             {
//                 id: '',
//                 desc: '',
//                 status: '',
//                 date: '',
//                 finalDate: ''  
//             }
//         ],
//         count: 1,
//      },
//      methods: {
//         set_user() {
//             var currentUser = $(event.target).closest('.popup').find(':input').val();
//             var currUs = $('#userid').val();
//             if(currUs == '') {
//                 alert("Введите имя ответственного!");
//             } else {
//                 user: this.new_task.user;
//                 this.isPageLoaded = false;
//             }
//         },
//         add_task() {
//                 if(this.desci == '' ) {
//                     alert('Заполните поле!')
//                 }
//                 else {
//                     this.new_task.push ({
//                         id: this.count++,
//                         desc: this.desci,
//                         user: this.new_task.user
//                     });
//                 }
//                 this.new_task.desc = '';
//                 console.log(this.count);
//             },
//         close_task() {
//             $('.popup-close').click(function() {
//                 $(this).parents('.popup-fade').fadeOut();
//                 return false;
//             });
//         },
//         edit_desc: function(event) {
//             targ = $(event.target);
//             $('.popup-fade').fadeIn();
//             // var whichbl = $('.proverka').attr('class');
//             var whichbl = $(event.target).closest('.columns').find('proverka').attr('class');
//             var currentPlan = $(event.target).closest('li').find('p');
//             var nextBlock = $(event.target).closest('li');
//             var currentDescription = $('#cng-desc').val();
//             var date = new Date();
//             if ($(event.target).closest('.proverka').attr('class') == 'columns__plan proverka') {
//                 $('.popup__start-date').addClass('hide');
//                 $('.popup__final-date').addClass('hide');
//             } else if($(event.target).closest('.proverka').attr('class') == 'columns__process proverka') {
//                 $('.popup__start-date').removeClass('hide');
//             } else if ($(event.target).closest('.proverka').attr('class') == 'columns__done proverka') {
//                 $('.popup__start-date').removeClass('hide');
//                 $('.popup__final-date').removeClass('hide');

//             }
//             console.log(whichbl);
//             if ($(event.target).closest('.proverka').attr('class') == 'columns__plan proverka') {
//                 if (currentDescription == '') {
//                     alert('Заполните поле!');
//                 } else {
//                     $('.submit_btn').click(function(ev) {
//                         var currentDesc = $('#cng-desc').val();
//                         var currentStatus = $('#status').val();
//                         $(currentPlan).text(currentDesc);
//                         // console.log(currentDesc);
//                         // console.log(currentPlan);
//                         if (currentStatus == 'plan') {
//                             $(nextBlock).appendTo('.columns__plan');
//                             $('.new-date-par').addClass('hide');
//                             $('.date-par').addClass('hide');
//                             $('.new-date-par').remove();
//                             $('new-date-par').detach(':empty');
//                             $('.date-par').remove();
//                             $('.date-par').detach(':empty');
//                             // this.process.pop({
//                             //     id: ''
//                             // });
//                             // this.done.pop({
//                             //     id: '',
//                             // });
//                         } else if(currentStatus == 'process') {
//                             var statusStartDate = new Date();
//                             this.date = statusStartDate;
//                             var descStartTime = $('#cng-start-time');
//                             $(descStartTime).val(this.date);
//                             $('.date-par').removeClass('hide');
//                             var currentProcessBlock = $('.date-par');
//                             $(currentProcessBlock).addClass(' check-done');
//                             var checkButton = $(event.target).closest('.columns__plan_icons').find('.fa-times-circle');
//                             $(nextBlock).appendTo('.columns__process');
//                             $('.new-date-par').addClass('hide');
//                             $('.new-date-span').addClass('hide');
//                             if ($(currentProcessBlock).attr('class') != 'date-par check-done') {
//                                 $(currentPlan).after('<span class="date-par">Дата и время начала: <span class="date-span">' + this.date + '</span></span>');
//                             }
//                             $(checkButton).removeClass('fas fa-times-circle').addClass('far fa-check-circle');    
//                             var date = new Date();
//                             this.date = date;
//                             this.dateHours = date.getHours();
//                             this.dateMinutes = date.getMinutes();
//                             this.dateSeconds = date.getSeconds();
//                             // this.new_task.pop ({
//                             //     id: ''
//                             // });
//                             $(nextBlock).appendTo('.columns__process');
//                             // this.process.push({     
//                             //     id: this.count++,
//                             //     desc: this.new_task.desc,
//                             //     user: this.new_task.user,
//                             //     status: 'Process',
//                             //     date: new Date()
//                             // });
//                         } else if (currentStatus == 'done') {
//                             statusFinalDate = new Date();
//                             this.finalDate = statusFinalDate;
//                             var descFinalTime = $('#cng-final-time');
//                             $(descFinalTime).val(this.finalDate);
//                             var currentBlock = $(event.target).closest('.columns__plan_desc').find('span');
//                             $(nextBlock).appendTo('.columns__done');
//                             var checkButton = $(event.target).closest('.columns__plan_icons').find('.fa-check-circle');
//                             var startDate = $(event.target).closest('li').find('.date-par');
//                             var finalDate = new Date()
//                             $('.new-date-par').text('');
//                             this.finalDateHours = finalDate.getHours();
//                             this.finalDateMinutes = finalDate.getMinutes();
//                             this.finalDateSeconds = finalDate.getSeconds();
//                             // console.log(whichbl);
//                             $(nextBlock).appendTo('.columns__done');
//                             if ($(currentBlock).attr('class') != 'new-date-par new-check-done') {
//                                 $(event.target).closest('.columns__plan_block').find('.columns__plan_desc').after('<span class="new-date-par"> Дата и время окончания: <span class="new-date-span">' + this.finalDate + '</span></span>')
//                                 $(event.target).closest('.columns__plan_block').find('.columns__plan_desc').after('<span class="new-date-par"> Затрачено времени: <span class="new-date-span">' + (this.finalDateHours - this.dateHours) + ':' + (this.finalDateMinutes - this.dateMinutes) + ':' +  (this.finalDateSeconds - this.dateSeconds) + '</span></span>')
//                                 $(checkButton).removeClass('far fa-check-circle').addClass('fas fa-times-circle');
//                             }
//                             $(currentBlock).addClass(' new-check-done');
//                             // $(event.target).closest('.columns__plan_block').css('display', 'none');
//                             // var checkButton = $(event.target).closest('.columns__plan_icons').find('.fa-times-circle');
//                             // var finalDate = new Date();
//                             // this.finalDate = finalDate;
//                             // this.finalDateHours = finalDate.getHours();
//                             // this.finalDateMinutes = finalDate.getMinutes();
//                             // this.finalDateSeconds = finalDate.getSeconds();
//                             // this.process.pop ({
//                             //     id: ''
//                             // });
//                             // this.done.push({
//                             //     id: this.count++,
//                             //     desc: this.new_task.desc,
//                             //     user: this.new_task.user,
//                             //     status: 'Process',
//                             //     date: new Date(),
//                             //     finalDate: new Date(),
//                             //     dateDiff: (this.finalDateHours - this.dateHours) + ':' + (this.finalDateMinutes - this.dateMinutes) + ':' +  (this.finalDateSeconds - this.dateSeconds)
//                             // });
//                         }
//                         $(this).parents('.popup-fade').fadeOut();
//                         console.log(currentStatus);
//                     });
//                 }
//             }
            
//         },
//         edit_task: function(event) {
            
//         },
//         // next_column: function(event) {
//         //     var whichbl = $(event.target).closest('.proverka').attr('class')
//         //     console.log(whichbl);
//         //         var date = new Date();
//         //         this.date = date;
//         //         var descStartTime = $('#cng-start-time');
//         //         $(descStartTime).val(this.date);
//         //         this.dateHours = date.getHours();
//         //         this.dateMinutes = date.getMinutes();
//         //         this.dateSeconds = date.getSeconds();
//         //         var nextBlock = $(event.target).closest('li');
//         //         if (whichbl == 'columns__plan proverka') {
//         //             $('.popup__final-date').addClass('hide');
//         //             var descBlock = $(event.target).closest('.columns__plan_block').find('.columns__plan_desc');
//         //             $(nextBlock).appendTo('.columns__process');
//         //             $(descBlock).after('<span class="date-par">Дата и время начала: <span class="date-span">' + this.date + '</span></span>');
//         //             console.log(descBlock);
//         //             // $(event.target).closest('.columns__plan_edit').find('.fa-check-circle').removeClass('check').addClass('done')
//         //         } else if(whichbl == 'columns__process proverka') {
//         //                 $('.popup__final-date').removeClass('hide');
                        
//         //                 var checkButton = $(event.target).closest('.columns__plan_icons').find('.fa-check-circle');
//         //                 var startDate = $(event.target).closest('li').find('.date-par');
//         //                 var finalDate = new Date()
//         //                 this.finalDate = finalDate;
//         //                 var descFinalTime = $('#cng-final-time');
//         //                 $(descFinalTime).val(this.finalDate);
//         //                 this.finalDateHours = finalDate.getHours();
//         //                 this.finalDateMinutes = finalDate.getMinutes();
//         //                 this.finalDateSeconds = finalDate.getSeconds();
//         //                 // console.log(whichbl);
//         //                 $(nextBlock).appendTo('.columns__done');
//         //                 $(event.target).closest('.columns__plan_block').find('.columns__plan_desc').after('<span class="new-date-par"> Дата и время окончания: <span class="new-date-span">' + this.finalDate + '</span></span>')
//         //                 $(event.target).closest('.columns__plan_block').find('.columns__plan_desc').after('<span class="new-date-par"> Затрачено времени: <span class="new-date-span">' + (this.finalDateHours - this.dateHours) + ':' + (this.finalDateMinutes - this.dateMinutes) + ':' +  (this.finalDateSeconds - this.dateSeconds) + '</span></span>')
//         //                 $(checkButton).removeClass('far fa-check-circle').addClass('fas fa-times-circle');
//         //         } else if(whichbl == 'columns__done proverka') {
//         //                 $(event.target).closest('.columns__plan_block').css('display', 'none');
//         //         }
//         //     },
//             next_plan: function(event) {
//                 var desc = $(event.target).closest('li').find('.columns__plan_desc').text()
//                 var planId = $(event.target).closest('li').find('.indef').text();
                
//                 this.new_task.pop ({
//                     id: planId
//                 });
//                 var date = new Date();
//                 this.date = date;
//                 this.dateHours = date.getHours();
//                 this.dateMinutes = date.getMinutes();
//                 this.dateSeconds = date.getSeconds();
//                 // $(nextBlock).appendTo('.columns__process');
//                 this.process.push({     
//                     id: planId,
//                     desc: desc,
//                     status: 'Process',
//                     date: new Date()
//                 });
                    
//             },
//             next_process: function (e) {
//                 var planId = $(e.target).closest('li').find('.indef').text();
//                 var desc = $(e.target).closest('li').find('.columns__plan_desc').text()
//                 var checkButton = $(e.target).closest('.columns__plan_icons').find('.fa-times-circle');
//                 var finalDate = new Date();
//                 this.finalDate = finalDate;
//                 this.finalDateHours = finalDate.getHours();
//                 this.finalDateMinutes = finalDate.getMinutes();
//                 this.finalDateSeconds = finalDate.getSeconds();
//                 console.log(planId);
//                 this.process.pop ({
//                     id: planId,
//                 });
//                 this.done.push({
//                     id: planId,
//                     desc: desc,
//                     status: 'Process',
//                     date: new Date(),
//                     finalDate: new Date(),
//                     dateDiff: (this.finalDateHours - this.dateHours) + ':' + (this.finalDateMinutes - this.dateMinutes) + ':' +  (this.finalDateSeconds - this.dateSeconds)
//                 });
//                 $(checkButton).removeClass('far fa-check-circle').addClass('fas fa-times-circle');
//             },
//             next_done: function (event) {
//                 var planId = $(event.target).closest('li').find('.indef').text();
//                 this.done.pop({
//                     id: planId
//                 });
//             },
//             drop: function(evt, list) {
//                 console.log('DELETE id '+ evt.dataTransfer.getData('itemDELETE'))
//                 if(evt.dataTransfer.getData('itemSTATUS') == 'columns__plan'){
//                     var a = this.new_task.find(item => item.id == evt.dataTransfer.getData('itemDELETE'))
//                     a.id = '';
//                     this.countplans+=1;
//                 }
//                 if(evt.dataTransfer.getData('itemSTATUS') == 'columns__process'){
//                     var a = this.process.find(item => item.id == evt.dataTransfer.getData('itemDELETE'))
//                     a.id = '';
//                     this.countwork+=1;
//                 }
//                 if(evt.dataTransfer.getData('itemSTATUS') == 'done'){
//                     var a = this.done.find(item => item.id == evt.dataTransfer.getData('itemDELETE'))
//                     a.id = '';
//                     this.countstop+=1;
//                 }
//                 console.log("this.seconddesc "+ evt.dataTransfer.getData('itemDECS'))
//                 if(list == 'plan'){
//                     this.new_task.push({
//                         id: evt.dataTransfer.getData('itemID'),
//                         description: evt.dataTransfer.getData('itemDECS')
//                     });
//                 }
//                 if(list == 'process'){
//                     Data1 = new Date();
//                     this.Hour1 = Data1.getHours();
//                     this.Minutes1 = Data1.getMinutes();
//                     this.Seconds1 = Data1.getSeconds();
//                     this.process.push({
//                         id: evt.dataTransfer.getData('itemID'),
//                         description: evt.dataTransfer.getData('itemDECS'),
//                         datestart: new Date(),
//                         responsable: this.namevalue,
//                     });
//                 }
//                 if(list == 'done'){
//                     Data2 = new Date();
//                     this.Hour2 = Data2.getHours();
//                     this.Minutes2 = Data2.getMinutes();
//                     this.Seconds2 = Data2.getSeconds();
//                     if(evt.dataTransfer.getData('itemSTATUS') == 'plans'){
//                         this.h = '00'
//                         this.m = '00'
//                         this.s = '00'
//                     }else{
//                         if((this.Hour2-this.Hour1) < 9){
//                             this.h = '0'+(this.Hour2-this.Hour1)
//                         }
//                         if((this.Minutes2-this.Minutes1) < 9){
//                             this.m = '0'+(this.Minutes2-this.Minutes1)
//                         }
//                         if((this.Seconds2-this.Seconds1) < 9){
//                             this.s = '0'+(this.Seconds2-this.Seconds1)
//                         }
//                     }
                    
//                     this.done.push({
//                         id: evt.dataTransfer.getData('itemID'),
//                         description: evt.dataTransfer.getData('itemDECS'),
//                         datestart: evt.dataTransfer.getData('itemDATE'),
//                         responsable: this.namevalue,
//                         dateend: new Date(),
//                         during: this.h+':'+this.m+':'+this.s,
//                     });
//                 }
//             },
//             drag: function(event, item) {
//                 const target = e.target;
//                 evt.dataTransfer.dropEffect = 'move';
//                 evt.dataTransfer.effectAllowed = 'move';
//                 this.status = $(event.target).closest('.check').attr('class');
//                 this.dragid = item.id;
//                 this.dragstartdate = item.datestart;
//                 this.dragdesc = item.description;
//                 if(eventt.dataTransfer.getData('itemDATE') == ''){
//                     event.dataTransfer.setData('itemDATE', new Date());
//                 }
//                 if(this.status == 'columns__plan proverka'){
//                     event.dataTransfer.setData('itemID', item.id);
//                     event.dataTransfer.setData('itemDECS', item.description);
//                     event.dataTransfer.setData('itemDELETE', item.id);
//                     event.dataTransfer.setData('itemSTATUS', 'plan');
//                     //this.plans.splice(this.plans.indexOf(item.id), 1);
                    
//                 }
//                 if(this.status == 'columns__process proverka'){
//                     event.dataTransfer.setData('itemID', item.id);
//                     event.dataTransfer.setData('itemDECS', item.description);
//                     event.dataTransfer.setData('itemDATE', item.datestart);
//                     // event.dataTransfer.setData('itemRESPONS', item.responsable);
//                     event.dataTransfer.setData('itemDELETE', item.id);
//                     event.dataTransfer.setData('itemSTATUS', 'process');
//                 }
//                 if(this.status == 'columns__done proverka'){
//                     event.dataTransfer.setData('itemID', item.id);
//                     event.dataTransfer.setData('itemDECS', item.description);
//                     event.dataTransfer.setData('itemDATE', item.datestart);
//                     event.dataTransfer.setData('itemDATEEND', item.dateend);
//                     event.dataTransfer.setData('itemRESPONS', item.responsable);
//                     event.dataTransfer.setData('itemDELETE', item.id);
//                     event.dataTransfer.setData('itemSTATUS', 'done');
//                 }
//             },
//         },
// });
