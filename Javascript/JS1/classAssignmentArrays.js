const ageClass = (age) => {

if(age <13) {
    console.log('you do not qualify for the program');
   } else if(age >=13 && age <=17) {
    console.log('catalyst program');
   } else if(age >=18 && age <=40) {
    console.log('evening program');
   } else {
    console.log('cool people program');
      }
    }
ageClass (2)
ageClass (13)
ageClass (17)
ageClass (18)
ageClass (40)
ageClass (41)
ageClass (50)