describe("Test Class Company", function () {
   describe("Test Setter", function () {
      let com;
      beforeEach(() => com = new Company());
      it("Test rooms", function () {
         let room1 = new Room('SA01', 'System Analyst');
         let room2 = new Room('SE02', 'Software Engineer');
         let room3 = new Room('BA', 'Business Analyst');
         let room4 = room2;
         com.rooms = room1;
         com.rooms = [room2, room3];
         com.rooms = room4;
         expect(com.rooms).toEqual([room1, room2, room3]);
      });
      it("Test employers", function () {
         let teo = new Employer('LD0001', 'Teo', '1-12-1999', 'Leader');
         let ti = new Employer();
         let tun = new Employer();
         let ta = teo;
         com.employers = teo;
         com.employers = [ti, tun, ta];
         expect(com.employers).toEqual([teo, tun, ti]);
      });
   });
   describe("Test Functions", function () {
      let com;
      let ton, tun, det;
      let room1, room2, room3;
      beforeEach(function () {
         com = new Company();
         ton = new Employer('LD1111', 'Ton', '1-12-1999', 'Leader');
         tun = new Employer('TU0002', 'Tun', '', 'Employer');
         det = new Employer('BO0005', 'Det', '', 'Boss');
         room1 = new Room('SA01', 'System Analyst');
         room2 = new Room('SE02', 'Software Engineer');
         room3 = new Room('BA03', 'Business Analyst');
      });

      it("Test toString('rooms')", function () {
         com.rooms = [room1, room2, room3];
         let resultExpected =
            '<table>' +
            '<tr>' +
            '<th>Code</th>' +
            '<th>Name</th>' +
            '<th>Leader</th>' +
            '<th>Employers</th>' +
            '</tr>' +
            '<tr>' +
            '<td>SA01</td>' +
            '<td>System Analyst</td>' +
            '<td>;;;</td>' +
            '<td>0</td>' +
            '</tr>' +
            '<tr>' +
            '<td>SE02</td>' +
            '<td>Software Engineer</td>' +
            '<td>;;;</td>' +
            '<td>0</td>' +
            '</tr>' +
            '<tr>' +
            '<td>BA03</td>' +
            '<td>Business Analyst</td>' +
            '<td>;;;</td>' +
            '<td>0</td>' +
            '</tr>' +
            '</table>';
         expect(com.toString('rooms')).toEqual(resultExpected);
      });
      it("Test toString('employers')", function () {
         let teo = new Employer('LD0001', 'Teo', '1-2-1999', 'Leader');
         let ti = new Employer('TI0003', 'Ti', '', 'Wife');
         com.employers = [teo, tun, ti, ton, det];
         let resultExpected =
            '<table>' +
            '<tr>' +
            '<th>Code</th>' +
            '<th>Name</th>' +
            '<th>Birth</th>' +
            '<th>Position</th>' +
            '</tr>' +
            '<tr>' +
            '<td>LD0001</td>' +
            '<td>Teo</td>' +
            '<td>1-2-1999</td>' +
            '<td>Leader</td>' +
            '</tr>' +
            '<tr>' +
            '<td>TU0002</td>' +
            '<td>Tun</td>' +
            '<td></td>' +
            '<td>Employer</td>' +
            '</tr>' +
            '<tr>' +
            '<td>TI0003</td>' +
            '<td>Ti</td>' +
            '<td></td>' +
            '<td></td>' +
            '</tr>' +
            '<tr>' +
            '<td>LD1111</td>' +
            '<td>Ton</td>' +
            '<td>1-12-1999</td>' +
            '<td>Leader</td>' + '</tr>' +
            '<tr>' +
            '<td>BO0005</td>' +
            '<td>Det</td>' +
            '<td></td>' +
            '<td>Boss</td>' +
            '</tr></table>';
         expect(com.toString('employers')).toEqual(resultExpected);
      })
      it("Check remove(Employers)", function () {
         com.employers = [ton, tun, det];
         com.remove(tun);
         expect(com.employers).toEqual([ton, det]);
      });
      it("Check static calSumOfSalary()", function () {
         com.employers = [ton, tun, det];
         expect(com.calSumOfSalary()).toEqual(1700);
      });
      it("Check findEmployers()", function () {
         com.employers = [ton, tun, det];
         expect(com.findEmployers('Leader')).toEqual([ton]);
         expect(com.findEmployers('Tun')).toEqual([tun]);
         expect(com.findEmployers('BO0005')).toEqual([det]);
         expect(com.findEmployers('')).toEqual([tun, det]);
      });
      // Waiting for findRooms()
   /*   it("Check findRooms()", function () {
         room1 = new Room('SA01', 'System Analyst', ton, [tun]);
         room2 = new Room('SE02', 'Software Engineer', det, [tun]);
         com.rooms = [room1, room2, room3];
         expect(com.findRooms('')).toEqual([room3]);
         expect(com.findRooms('Tun')).toEqual([tun]);
         expect(com.findRooms('BO0005')).toEqual([det]);
         expect(com.findRooms('')).toEqual([tun, det]);
      })
   */
   })
})