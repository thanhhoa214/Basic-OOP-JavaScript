class EmployersControl {
   constructor(employers = []) {
      this._employers = [];
      this.employers = employers;
   }
   get employers() {
      return this._employers;
   }
   set employers(input) {
      if (input instanceof Employer) {
         if (!this._employers.includes(input)) {
            this._employers.push(input);
            return;
         }
      }
      let len = input.length;
      for (let i = 0; i < len; i++) {
         const element = input[i];
         if (element instanceof Employer) {
            if (!this._employers.includes(element)) {
               this._employers.push(element);
            }
         }
      }
   }
   
   remove(emp) {
      if (emp instanceof Employer) {
         let index = this._employers.indexOf(emp);
         if (index > -1) {
            this._employers.splice(index, 1);
            return;
         }
      }
      let len = emp.length;
      for (let i = 0; i < len; i++) {
         const element = emp[i];
         if (element instanceof Employer) {
            let index = this._employers.indexOf(element);
            if (index > -1) {
               this._employers.splice(index, 1);
            }
         }
      }
   }

}
