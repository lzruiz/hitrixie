// onload = () => {
//   const c = setTimeout(() => {
//     document.body.classList.remove("not-loaded");
//     clearTimeout(c);
//   }, 1000);
// };

// $(document).ready(function(){
//       const c = setTimeout(() => {
//         document.body.classList.remove("not-loaded");
//         clearTimeout(c);
//       }, 1000);
// });

$(document).ready(function(){
    $('#yesBtn').on('click', function(){
        const c = setTimeout(() => {
            $('#mainBody').removeClass('items-center');
            $('#divCard').addClass('hidden');
            $('#post').removeClass('hidden');
            $('#alertTayo').removeClass('hidden');
            document.body.classList.remove("not-loaded");
            clearTimeout(c);
        }, 1000);
    });
    $('#noBtn').on('click', function(){
        $('#gif').attr('src', 'https://media1.tenor.com/m/r5T0SmQelGQAAAAC/throw.gif');
    });
    
});