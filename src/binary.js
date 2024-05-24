function binarySearch(needle, haystack) {
  let min = 0;
  let max = haystack.length - 1;

  while (min <= max) {
    mid = parseInt((max + min) / 2);

    if (haystack[mid] === needle) {
      return mid;
    } else if (haystack[mid] > needle) {
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }

  return -1;
}
