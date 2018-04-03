let testCompanyHTML = function () {
   let com = new Company();
   let teo = new Employer('LD0001', 'Teo', '1-12-1999', 'Leader');
   let tun = new Employer('TU0002', 'Tun', '', 'Employer');
   let ti = new Employer('TI0003', 'Ti');
   let ton = new Employer('LD1111', 'Ton', '1-12-1999', 'Leader');
   let det = new Employer('BO0005', 'Det', '', 'Boss');

   let room1 = new Room('SA01', 'System Analyst', teo, teo);
   let room2 = new Room('SE02', 'Software Engineer', tun, tun);
   let room3 = new Room('BA03', 'Business Analyst', ton, ton);

   com.employers = [teo, tun, ti, ton, det];
   com.rooms = room1;
   com.rooms = [room2, room3];
   document.getElementById('demo').innerHTML = com.toString('rooms') + '<hr>' + com.toString('employers');
}