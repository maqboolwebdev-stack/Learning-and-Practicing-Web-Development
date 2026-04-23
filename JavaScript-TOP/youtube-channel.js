class YoutubeChannel{
    constructor() {
        this.subscribers = [];
    }

    subscribe(user){
        this.subscribers.push(user);
        user.update(` You have subscribed the channel.`);
    }

    unsubscribe(user){
        this.subscribers = this.subscribers.filter((sub) => sub !== user);
        user.update(` You have un-subscribed the channel.`);
    }

    notify(message){
        this.subscribers.forEach((sub) => sub.update(message));
    }
}

class User{
    constructor(name){
        this.name = name;
    }

    update(data) {
        console.log(`${this.name}, ${data}`);
    }
};

let waqasMaqbool = new YoutubeChannel();
let user1 = new User('ali');

waqasMaqbool.subscribe(user1);
waqasMaqbool.unsubscribe(user1);

waqasMaqbool.notify('new video on live');