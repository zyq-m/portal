function activeNavbar(arrElement, activeClass) {
  for (let i = 0; i < arrElement.length; i++) {
    arrElement[i].addEventListener("click", () => {
      // remove all className
      for (let k = 0; k < arrElement.length; k++) {
        activeClass.forEach(value => {
          arrElement[k].classList.remove(value);
        });
      }

      // add className to clicked element
      activeClass.forEach(value => {
        arrElement[i].classList.add(value);
      });
    });
  }
}
