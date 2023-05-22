function Choice(items) {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

function Remove(items, item) {
  let removeIndex = items.indexOf(item);
  if (removeIndex !== -1) {
    return items.splice(removeIndex, 1);
  }
  return undefined;
}

export { Choice, Remove };