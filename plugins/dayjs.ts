import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';



export default defineNuxtPlugin({
    name:'dayjs',
    parallel: true,
    setup(){
        dayjs.extend(duration);
    }
})