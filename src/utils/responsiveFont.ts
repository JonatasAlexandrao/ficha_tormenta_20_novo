

let responsiveFont = new ResizeObserver(element => {

  let result = element.forEach(entry => {
    const cr = entry.contentRect;
    console.log('Element:', entry.target);
    console.log(`Element size: ${cr.width}px x ${cr.height}px`);
    console.log(`Element padding: ${cr.top}px ; ${cr.left}px`);

    let t = cr.width / 20
    return `${t}px`
  });

  return result

  /*for (let entry of entries) {
    const cr = entry.contentRect;
    console.log('Element:', entry.target);
    console.log(`Element size: ${cr.width}px x ${cr.height}px`);
    console.log(`Element padding: ${cr.top}px ; ${cr.left}px`);

    let t = cr.width / 20
    fontSize = `${t}px`

    someElement.style.setPresponsiveFontperty('--font', fontSize);

  }*/
});






// Observe one or multiple elements
//ro.observe(someElement);


export { responsiveFont }