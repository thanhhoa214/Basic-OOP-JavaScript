describe("Test Class Employer", function () {
   let emp1;
   describe("Test Setter", function () {
      beforeEach(() => emp1 = new Employer());
      it("Test Code Setter", function () {
         emp1.code = 'SE1301';
         expect(emp1.code).toBe('SE1301');
      });
      it("Test Name Setter", function () {
         emp1.name = 'Thanh Hoa';
         expect(emp1.name).toBe('Thanh Hoa');
      });
      it("Test Position Setter", function () {
         emp1.position = 'Boss';
         expect(emp1.position).toBe('Boss');
      });
   });
   it("Test getSalary()", function () {
      emp1 = new Employer();
      emp1.position = 'Leader';
      let salary = emp1.getSalary();
      let emp2 = new Employer('', '', '', 'Employer');
      expect(salary).toBe(575);
      expect(emp2.getSalary()).toBe(500);
   });
   it("Test toString()", function () {
      emp1 = new Employer('LD0001', 'Nguyen Van Teo', '1-12-1999', 'Leader');
      expect(emp1.toString()).toEqual('LD0001;Nguyen Van Teo;1-12-1999;Leader')
   });
   it("Test compareTo()", function () {
      emp1 = new Employer('LD0001', 'Nguyen Van Teo', '1-12-1999', 'Leader');
      let emp2 = new Employer('LD0001', 'Nguyen Van Teo', '1-12-1999', 'Leader');
      expect(emp1.compareTo(emp2)).toEqual(true);
   })
});