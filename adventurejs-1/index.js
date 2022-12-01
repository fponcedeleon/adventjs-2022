function getSeparator(n) {
  return "*".repeat(n);
}

function wrapping(gifts) {
  return gifts.map((gift) => {
    const separator = getSeparator(2 + gift.length);
    return `${separator}\n*${gift}*\n${separator}`;
  });
}

module.exports = wrapping;
