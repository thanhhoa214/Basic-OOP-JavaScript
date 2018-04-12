describe("Test Class Room", function () {
   describe("Check setter", function () {
      let room = new Room();
      it("Check Code", function () {
         room.code = 'SE13';
         expect(room.code).toBe('SE13');
      });
      it("Check Name", function () {
         room.name = 'Web Dev';
         expect(room.name).toBe('Web Dev');
      });
      it("Check Leader", function () {
         let teo = new Employer('LD0001', 'Teo', '1-12-1999', 'Leader');
         room.leader = new Employer('LD0001', 'Teo', '1-12-1999', 'Leader');
         expect(room.leader).toEqual(teo);
      });
      it("Check Employers", function () {
         let teo = new Employer('LD0001', 'Teo', '1-12-1999', 'Leader');
         let tun = new Employer();
         let ti = new Employer();
         let ta = teo;
         room.employers = teo;
         room.employers = [tun, ti, ta, teo];
         expect(room.employers).toEqual([teo, tun, ti]);
      });
   });
   describe("Test Functions", function () {
      it("Check toString()", function () {
         let ton = new Employer('LD1111', 'Ton', '1-12-1999', 'Leader');
         let ti = new Employer();
         let room = new Room('SA01', 'System Analyst', ton, [ton, ti]);
         let resultExpected =
            '<tr>' +
            '<td>SA01</td>' +
            '<td>System Analyst</td>' +
            '<td>LD1111;Ton;1-12-1999;Leader</td>' +
            '<td>2</td>' +
            '</tr>';
         expect(room.toString()).toEqual(resultExpected);
      });
      it("Check remove(Employers)", function () {
         let ton = new Employer('LD1111', 'Ton', '1-12-1999', 'Leader');
         let tun = new Employer('TU0002', 'Tun', '', 'Sub-Leader');
         let det = new Employer('BO0005', 'Det', '', 'Boss');
         let room = new Room('SA01', 'System Analyst', ton, [ton, tun, det]);
         room.remove(det);
         expect(room.employers).toEqual([ton, tun]);
      });
      it("Check sortByPosition()", function () {
         let ton = new Employer('LD1111', 'Ton', '1-12-1999', 'Leader');
         let tun = new Employer('TU0002', 'Tun', '', 'Employer');
         let det = new Employer('BO0005', 'Det', '', 'Boss');
         let ti = new Employer('EM0003', 'Ti', '', 'Employer');
         let luom = new Employer();
         let room = new Room('SA01', 'System Analyst', ton, [ton, tun, det, ti, luom]);
         room.sortByPosition();
         expect(room.employers).toEqual([det, ton, ti, tun, luom]);
      });
   });
});