let table = document.createElement('table');
  table.setAttribute('border', '1');
  table.style.borderCollapse = 'collapse';
  table.style.backgroundColor = 'blAck';
  table.style.width = '50%';
  table.style.height = '200px';
  table.style.textAlign = 'center';
  table.style.margin = '20px auto';
  table.style.fontSize = '28px';
  table.style.fontFamily = 'Arial, sans-serif';
  table.style.color = 'darkblue';
  table.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.5)';
  table.style.borderRadius = '10px';
  table.style.padding = '10px';
  table.style.transparent = 'true';
  table.style.opacity = '0.8';
  table.style.transition = 'all 0.3s ease';
  table.style.cursor = 'pointer';
  table.style.userSelect = 'none';
  table.style.transform = 'scale(1)';
  table.style.transformOrigin = 'center';
  table.style.zIndex = '1';
  table.style.position = 'relative';
  table.style.overflow = 'hidden';
  table.style.display = 'flex';
    table.style.justifyContent = 'center';
    table.style.alignItems = 'center';
    table.style.flexDirection = 'column';
    table.style.gap = '10px';
    table.style.textShadow = '0 0 5px rgba(255, 255, 255, 0.7)';
    table.style.boxSizing = 'border-box';
    table.style.margin = '0';
    table.style.padding = '0';
    table.style.overflow = 'hidden';
    table.style.cursor = 'pointer';
    table.style.transition = 'all 0.3s ease';
    table.style.userSelect = 'none';
  table.addEventListener('mouseover', () => {
    table.style.transform = 'scale(1.05)';
    table.style.boxShadow = '0 0 15px rgba(255, 255, 255, 0.7)';
  });
  table.addEventListener('mouseout', () => {
    table.style.transform = 'scale(1)';
    table.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.5)';
  });
  table.addEventListener('click', () => {
    table.style.backgroundColor = 'darkblue';
    table.style.color = 'white';
  });   
  table.addEventListener('dblclick', () => {
    table.style.backgroundColor = 'blAck';
    table.style.color = 'darkblue';
  });
  table.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    table.style.backgroundColor = 'red';
    table.style.color = 'white';
  });

  

  for(let i = 0; i<5; i++){
    let row = document.createElement('tr');
    for(let j = 0; j<5; j++){
        let col = document.createElement('td');
        col.textContent = `${i}-${j}`;
        row.appendChild(col);
    }
    table.appendChild(row);
    document.body.appendChild(table);
  }

  document.body.style.backgroundImage = 'url("bg.jpg")';
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.height = '100vh';

    document.body.style.display = 'flex';
    document.body.style.justifyContent = 'center';
    document.body.style.alignItems = 'center';
    document.body.style.flexDirection = 'column';
    document.body.style.gap = '20px';
    document.body.style.fontFamily = 'Arial, sans-serif';
    document.body.style.color = 'white';
    document.body.style.textShadow = '0 0 5px rgba(0, 0, 0, 0.5)';

    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.overflow = 'hidden';
    document.body.style.boxSizing = 'border-box';
    document.body.style.cursor = 'pointer';
    document.body.style.transition = 'background-color 0.5s ease';
    document.body.addEventListener('click', () => {
        document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    });
    document.body.addEventListener('mouseleave', () => {
        document.body.style.backgroundColor = 'transparent';
    });
    document.body.addEventListener('mouseenter', () => {
        document.body.style.backgroundColor = 'transparent';
    });
    document.body.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        document.body.style.backgroundPosition = `${x * 100}% ${y * 100}%`;
    });
document.body.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    document.body.style.backgroundPosition = `center ${scrollY * 0.5}px`;
});
document.body.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    document.body.style.backgroundSize = `${width}px ${height}px`;
});
document.body.addEventListener('wheel', (e) => {
    const delta = e.deltaY;
    document.body.style.backgroundPosition = `center ${delta * 0.5}px`;
}); 
document.body.addEventListener('keydown', (e) => {
    if(e.key === 'ArrowUp'){
        document.body.style.backgroundPosition = 'center 0'; 
    } else if(e.key === 'ArrowDown'){
        document.body.style.backgroundPosition = 'center 100%'; 
    }   else if(e.key === 'ArrowLeft'){ 
        document.body.style.backgroundPosition = '0 center';
    } else if(e.key === 'ArrowRight'){
        document.body.style.backgroundPosition = '100% center';
    }
});

