class Company extends EmployersControl {
   constructor(rooms = [], employers = []) {
      super(employers);
      this._rooms = [];
      this.rooms = rooms;
   }
   get rooms() {
      return this._rooms;
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

   calSumOfSalary() {
      let sum = 0;
      for (const iterator of this._employers) {
         sum += iterator.getSalary();
      }
      return sum;
   }

   findEmployers(infor) {
      let result = [];
      for (const employ of this._employers) {
         for (const key in employ) {
            if (employ.hasOwnProperty(key)) {
               const element = employ[key];
               if (element.toString() === infor) {
                  result.push(employ);
                  break;
               }
            }
         }
      }
      return result;
   }
   findRooms(infor) {
      let result = [];
      for (const room of this._rooms) {
         for (const key in room) {
            if (room.hasOwnProperty(key)) {
               const element = room[key];
               if (key instanceof Employer /*+ find infor in Leader*/) {

               }
               /*+ find infor in Employers[]*/
               if (element.toString() === infor) {
                  result.push(room);
                  break;
               }
               
            }
         }
      }
      return result;
   }
}