class Company {
   constructor(rooms = [], employers = []) {
      this._rooms = [];
      this._employers = [];
      this.rooms = rooms;
      this.employers = employers;
   }
   get rooms() {
      return this._rooms;
   }
   get employers() {
      return this._employers;
   }
   set rooms(input) {
      if (input instanceof Room) {
         if (!this._rooms.includes(input)) {
            this._rooms.push(input);
            return;
         }
      }
      let len = input.length;
      for (let i = 0; i < len; i++) {
         const element = input[i];
         if (element instanceof Room) {
            if (!this._rooms.includes(element)) {
               this._rooms.push(element);
            }
         }
      }
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
   toString(input) {
      let string = '<table><tr><th>';
      switch (input) {
         case 'rooms': {
            string += 'Code</th><th>Name</th><th>Leader</th><th>Employers</th></tr>';
            let len = this._rooms.length;
            for (let i = 0; i < len; i++) {
               const element = this._rooms[i];
               string += element;
            }
            break;
         }
         case 'employers': {
            string += 'Code</th><th>Name</th><th>Birth</th><th>Position</th></tr>';
            let len = this._employers.length;
            for (let i = 0; i < len; i++) {
               const element = this._employers[i];
               string += element.toStringHTML();
            }
            break;
         }
         default: {
            string += '</th></tr>';
         }
      }
      string += '</table>'
      return string;
   }

   remove(emp) {
      if (emp instanceof Employer) {
         let index = this._employers.indexOf(emp);
         if (index > -1) {
            this._employers.splice(index,1);
            return;
         }
      }
      let len = emp.length;
      for (let i = 0; i < len; i++) {
         const element = emp[i];
         if (element instanceof Employer) {
            let index = this._employers.indexOf(element);
            if (index>-1) {
               this._employers.splice(index,1);
            }
         }
      }
   }

}