
const computeSteps = (lesson) => {
  let steps = []
  lesson.cards.forEach(card => {

    const review = {
      card,
      isReview: true,
      isFlipped: false,
      isReviewed: false
    }
    steps = [...steps, card, review]
    // felix@TODO: shuffle here, but first item is a card, not a review. And cannot display a review of a not-yet-displayed card
  });
  return steps
}

export { computeSteps }
