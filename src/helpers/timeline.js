// export const projectsPageTimeline = (() => {

//   const page = document.getElementById('projects-page')
//   console.log(page)
//   const cards = page.querySelectorAll('.oblique-card')

//   cards.forEach((card) => {
//     const cardOffsetTop = card.offsetTop
//     const cardHeight = card.offsetHeight
//     card.animate(
//       {
//         transform: ['scale(0.9)', 'scale(1)'],
//         transform: ['prespective(1000px) rotateY(80deg)', 'prespective(1000px) rotateY(0)'],
//         opacity: ['0', '1']
//       },
//       {
//         duration: 10,
//         easing: 'linear',
//         timeline: new ScrollTimeline({
//           // scrollOffsets: [
//           //   {target: card, edge: 'end', threshold: '0'},
//           //   {target: card, edge: 'start', threshold: '1'}
//           // ]
//           scrollOffsets: [
//             CSS.px(cardOffsetTop + cardHeight - window.innerHeight),
//             CSS.px(cardOffsetTop - 100)
//           ]
//         })
//       }
//     )
//   })
// })()

// export default { projectsPageTimeline }
