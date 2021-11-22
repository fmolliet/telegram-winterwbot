import { Service } from 'typedi';
import TwitterApi from 'twitter-api-v2';

@Service()
class TwitterService {
    
    private client : TwitterApi;
    
    constructor(){
        this.client = new TwitterApi({
            appKey:  process.env.TWITTER_APIKEY || '',
            appSecret: process.env.TWITTER_APIKEY_SECRET || '',
            accessToken: process.env.TWITTER_TOKEN  || '',
            accessSecret: process.env.TWITTER_TOKEN_SECRET || '',
        });
    }
    
    public async getTweetsFromUser( user: string ){
        const timeline = await this.client.v1.homeTimeline({ exclude_replies: true });
        
        for await (const tweet of timeline) {
            console.log(tweet);
        }
    }
}

export default TwitterService;