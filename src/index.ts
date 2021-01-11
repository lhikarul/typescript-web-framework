import {User} from './models/User';

const user = new User({name:'evans', age: 27});
user.save()