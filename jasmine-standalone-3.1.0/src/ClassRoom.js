class Room {
   constructor(code = '', name = '', leader = new Employer(), employers = []) {
      this.code = code;
      this.name = name;
      this.leader = leader;
      this._employers = [];
      this.employers = employers;
   }
   get code() {
      return this._code;
   }
   get name() {
      return this._name;
   }
   get leader() {
      return this._leader;
   }
   get employers() {
      return this._employers;
   }
   set code(input) {
      if (input.toString().search(RegExp('^\\w{2}\\d{2}$', 'i')) > -1) {
         return this._code = input;
      }
      this._code = '';
   }
   set name(input) {
      if (input.toString().search(RegExp('^[a-z\\s]+$', 'i')) > -1) {
         return this._name = input;
      }
      this._name = '';
   }
   set leader(input) {
      if (input instanceof Employer && input.position === 'Leader') {
         return this._leader = input;
      }
      this._leader = new Employer();
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
  
   toString() {
      let str = '<tr>';
      for (const prop in this) {
         if (this.hasOwnProperty(prop)) {
            const element = this[prop];
            if (element instanceof Array) {
               str += '<td>' + element.length + '</td>';
               continue;
            }
            str += '<td>' + element + '</td>';
         }
      }
      str += '</tr>';
      return str;
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

   sortByPosition() {
      let leng = this._employers.length;
      for (let i = 0; i < leng; i++) {
         for (let j = leng; j > i+1; j--) {
            const pos = ['','Employer', 'Sub-Leader', 'Leader', 'Boss'];
            let element = this._employers[j-2];
            let element1 = this._employers[j-1];
            const indexOfj = pos.indexOf(element.position);
            const indexOfj1 = pos.indexOf(element1.position);
            if (indexOfj < indexOfj1 || (indexOfj === indexOfj1 && element.name > element1.name)) {
               let t = this._employers[j-2];
               this._employers[j-2] = this._employers[j-1];
               this._employers[j-1] = t;
            }
         }
      }
   }
}