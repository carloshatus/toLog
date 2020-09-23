# toLog
 A small lib to organize logs at your service, compatible with [AWS Lambda](https://docs.aws.amazon.com/lambda/latest/dg/nodejs-logging.html) logging and [AWS CloudWatch](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/WhatIsCloudWatchLogs.html) logs. 

## Fast start

### install

#### npm
```sh
npm i @carloshatus/to_log
```

#### yarn
```sh
yarn add @carloshatus/to_log
```

### import
```ts
import { ToLog } from '@carloshatus/to_log';
```

### instance
```ts
const log = new ToLog('your:log');
```

### logging
```ts
log.info('this is a info log');
// app:your:log [INFO] this is a info log
log.warn('this is a warning log');
// app:your:log [WARN] this is a warning log
log.error('this is a error log');
// app:your:log [ERROR] this is a error log
```

### data on log
```ts
log.info('this is a info log with data:', { value: 'data' });
// app:your:log [INFO] this is a info log with data: {"value":"data"}
log.warn('this is a warning log with data:', { value: 'data' });
// app:your:log [WARN] this is a warning log with data: {"value":"data"}
log.error('this is a error log with data:', { value: 'data' });
// app:your:log [ERROR] this is a error log with data: {"value":"data"}
```

## API Reference
### constructor
```ts
new ToLog(identifier, appPrefix);
```

create a new instance of ToLog object.
- identifier **[String]**: _name for your log;_
- appPrefix **[String, default: 'app']**: _prefix to better identify your application in the debug log;_

### log functions

#### info
```ts
log.info(message, data);
```

log a info message.
- message **[String]**: _message to your log;_
- data **[Any, default: 'null']**: _complement of your log, it is automatically parsed to string;_

> Note: if occurred a problem on parse the data to string, the error message is returned on data place.
> 
> E.g. 
> 
> `app:your:log [INFO] this is a info log with data: [UnexpectedJSONParseError]: Converting circular structure to JSON`

#### warn
```ts
log.warn(message, data);
```

log a warning message.
- message **[String]**: _message to your log;_
- data **[Any, default: 'null']**: _complement of your log, it is automatically parsed to string;_

> Note: if occurred a problem on parse the data to string, the error message is returned on data place.
> 
> E.g. 
> 
> `app:your:log [INFO] this is a info log with data: [UnexpectedJSONParseError]: Converting circular structure to JSON`

#### error
```ts
log.error(message, data);
```

log a error message.
- message **[String]**: _message to your log;_
- data **[Any, default: 'null']**: _complement of your log, it is automatically parsed to string;_

> Note: if occurred a problem on parse the data to string, the error message is returned on data place.
> 
> E.g.
> 
>  `app:your:log [INFO] this is a info log with data: [UnexpectedJSONParseError]: Converting circular structure to JSON`

### log mode
The default log mode is `console` mode. To use the `debug` mode, start your app with the node environment variable `DEBUG`.

```sh
DEBUG=app:* node index.js
DEBUG=your_app_prefix:* node index.js
```
