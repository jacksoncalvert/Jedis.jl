var documenterSearchIndex = {"docs":
[{"location":"client/#Redis-Client-Connection","page":"Client","title":"Redis Client Connection","text":"","category":"section"},{"location":"client/","page":"Client","title":"Client","text":"Client\nget_ssl_config\nJedis.ssl_connect\nexecute(command::AbstractArray, client::Client)\nJedis.GLOBAL_CLIENT\nset_global_client\nget_global_client\nJedis.copy\ndisconnect!\nreconnect!\nwait_until_subscribed\nwait_until_unsubscribed\nwait_until_channel_unsubscribed\nwait_until_pattern_unsubscribed","category":"page"},{"location":"client/#Jedis.Client","page":"Client","title":"Jedis.Client","text":"Client([; host=\"127.0.0.1\", port=6379, database=0, password=\"\", username=\"\", ssl_config=nothing]) -> Client\n\nCreates a Client instance connecting and authenticating to a Redis host, provide an MbedTLS.SSLConfig  (see get_ssl_config) for a secured Redis connection (SSL/TLS).\n\nAttributes\n\nhost::AbstractString: Redis host.\nport::Integer: Redis port.\ndatabase::Integer: Redis database index.\npassword::AbstractString: Redis password if any.\nusername::AbstractString: Redis username if any.\nsocket::Union{TCPSocket,MbedTLS.SSLContext}: Socket used for sending and reveiving from Redis host.\nlock::Base.AbstractLock: Lock for atomic reads and writes from client socket.\nssl_config::Union{MbedTLS.SSLConfig,Nothing}: Optional ssl config for secured redis connection.\nis_subscribed::Bool: Whether this Client is actively subscribed to any channels or patterns.\nsubscriptions::AbstractSet{<:AbstractString}: Set of channels currently subscribed on.\npsubscriptions::AbstractSet{<:AbstractString}: Set of patterns currently psubscribed on.\n\nNote\n\nConnection parameters host, port, database, password, username will not change after \n\nclient istance is constructed, even with SELECT or CONFIG SET commands.\n\nExamples\n\nBasic connection:\n\njulia> client = Client();\n\njulia> set(\"key\", \"value\"; client=client)\n\"OK\"\n\njulia> get(\"key\"; client=client)\n\"value\"\n\njulia> execute([\"DEL\", \"key\"], client)\n1\n\nSSL/TLS connection:\n\njulia> ssl_config = get_ssl_config(ssl_certfile=\"redis.crt\", ssl_keyfile=\"redis.key\", ssl_ca_certs=\"ca.crt\");\n\njulia> client = Client(ssl_config=ssl_config);\n\n\n\n\n\n","category":"type"},{"location":"client/#Jedis.get_ssl_config","page":"Client","title":"Jedis.get_ssl_config","text":"get_ssl_config([; ssl_certfile=nothing, ssl_keyfile=nothing, ssl_ca_certs=nothing]) -> MbedTLS.SSLConfig\n\nLoads ssl cert, key and ca cert files from provided directories into MbedTLS.SSLConfig object.\n\nExamples\n\njulia> ssl_config = get_ssl_config(ssl_certfile=\"redis.crt\", ssl_keyfile=\"redis.key\", ssl_ca_certs=\"ca.crt\");\n\n\n\n\n\n","category":"function"},{"location":"client/#Jedis.ssl_connect","page":"Client","title":"Jedis.ssl_connect","text":"ssl_connect(host::AbstractString, port::Integer, ssl_config::MbedTLS.SSLConfig) -> MbedTLS.SSLContext\n\nConnects to the redis host and port, returns a socket connection with ssl context.\n\n\n\n\n\n","category":"function"},{"location":"client/#Jedis.execute-Tuple{AbstractArray,Client}","page":"Client","title":"Jedis.execute","text":"execute(command[; client::Client=get_global_client()])\n\nSends a RESP compliant command to the Redis host and returns the result. The command is either an  array of command keywords, or a single command string. Defaults to using the globally set Client.\n\nExamples\n\njulia> execute([\"SET\", \"key\", \"value\"])\n\"OK\"\njulia> execute(\"GET key\")\n\"value\"\n\n\n\n\n\n","category":"method"},{"location":"client/#Jedis.GLOBAL_CLIENT","page":"Client","title":"Jedis.GLOBAL_CLIENT","text":"GLOBAL_CLIENT = Ref{Client}()\n\nReference to a global Client object.\n\n\n\n\n\n","category":"constant"},{"location":"client/#Jedis.set_global_client","page":"Client","title":"Jedis.set_global_client","text":"set_global_client(client::Client)\nset_global_client([; host=\"127.0.0.1\", port=6379, database=0, password=\"\", username=\"\", ssl_config=nothing])\n\nSets a Client object as the GLOBAL_CLIENT[] instance.\n\n\n\n\n\n","category":"function"},{"location":"client/#Jedis.get_global_client","page":"Client","title":"Jedis.get_global_client","text":"get_global_client() -> Client\n\nRetrieves the GLOBAL_CLIENT[] instance, if unassigned then initialises it with default values  host=\"127.0.0.1\", port=6379, database=0, password=\"\", username=\"\".\n\n\n\n\n\n","category":"function"},{"location":"client/#Base.copy","page":"Client","title":"Base.copy","text":"copy(client::Client) -> Client\n\nCreates a new Client instance, copying the connection parameters of the input.\n\n\n\n\n\n","category":"function"},{"location":"client/#Jedis.disconnect!","page":"Client","title":"Jedis.disconnect!","text":"disconnect!(client::Client)\n\nCloses the client socket connection, it will be rendered unusable.\n\n\n\n\n\n","category":"function"},{"location":"client/#Jedis.reconnect!","page":"Client","title":"Jedis.reconnect!","text":"reconnect!(client::Client) -> Client\n\nReconnects the input client socket connection.\n\n\n\n\n\n","category":"function"},{"location":"client/#Jedis.wait_until_subscribed","page":"Client","title":"Jedis.wait_until_subscribed","text":"wait_until_subscribed(client::Client)\n\nBlocks until client changes to a subscribed state.\n\n\n\n\n\n","category":"function"},{"location":"client/#Jedis.wait_until_unsubscribed","page":"Client","title":"Jedis.wait_until_unsubscribed","text":"wait_until_unsubscribed(client::Client)\n\nBlocks until client changes to a unsubscribed state.\n\n\n\n\n\n","category":"function"},{"location":"client/#Jedis.wait_until_channel_unsubscribed","page":"Client","title":"Jedis.wait_until_channel_unsubscribed","text":"wait_until_channel_unsubscribed(client::Client[, channels...])\n\nBlocks until client is unsubscribed from channel(s), leave empty to wait until unsubscribed from all channels.\n\n\n\n\n\n","category":"function"},{"location":"client/#Jedis.wait_until_pattern_unsubscribed","page":"Client","title":"Jedis.wait_until_pattern_unsubscribed","text":"wait_until_pattern_unsubscribed(client::Client[, patterns...])\n\nBlocks until client is unsubscribed from pattern(s), leave empty to wait until unsubscribed from all patterns.\n\n\n\n\n\n","category":"function"},{"location":"pubsub/#Pub/Sub","page":"Pub/Sub","title":"Pub/Sub","text":"","category":"section"},{"location":"pubsub/","page":"Pub/Sub","title":"Pub/Sub","text":"publish\nsubscribe\nunsubscribe\npsubscribe\npunsubscribe","category":"page"},{"location":"pubsub/#Jedis.publish","page":"Pub/Sub","title":"Jedis.publish","text":"publish(channel, message)\n\nPost a message to a channel.\n\n\n\n\n\n","category":"function"},{"location":"pubsub/#Jedis.subscribe","page":"Pub/Sub","title":"Jedis.subscribe","text":"subscribe(fn::Function,\n          channel,\n          channels...;\n          stop_fn::Function=(msg) -> false,\n          err_cb::Function=(err) -> log_error(err))\n\nListen for messages published to the given channels in a do block. Optionally provide a stop  function stop_fn(msg) which gets run as a callback everytime a subscription message is received,  the subscription loop breaks if the stop_fn returns true. Optionally provide err_cb(err)  function which gets run on encountering an exception in the main subscription loop.\n\nExamples\n\njulia> channels = [\"first\", \"second\"];\n\njulia> publisher = Client();\n\njulia> subscriber = Client();\n\njulia> stop_fn(msg) = msg[end] == \"close subscription\";  # stop the subscription loop if the message matches\n\njulia> messages = [];\n\njulia> @async subscribe(channels...; stop_fn=stop_fn, client=subscriber) do msg\n           push!(messages, msg)\n       end;  # Without @async this function will block, alternatively use Thread.@spawn\n\njulia> wait_until_subscribed(subscriber);\n\njulia> subscriber.is_subscribed\ntrue\n\njulia> subscriber.subscriptions\nSet{String} with 2 elements:\n  \"second\"\n  \"first\"\n\njulia> publish(\"first\", \"hello\"; client=publisher);\n\njulia> publish(\"second\", \"world\"; client=publisher);\n\njulia> println(messages)\nAny[[\"message\", \"first\", \"hello\"], [\"message\", \"second\", \"world\"]]  # message has the format [<message type>, <channel>, <actual message>]\n\njulia> unsubscribe(\"first\"; client=subscriber);\n\njulia> wait_until_channel_unsubscribed(subscriber, \"first\");\n\njulia> subscriber.subscriptions\nSet{String} with 1 element:\n  \"second\"\n\njulia> unsubscribe(; client=subscriber);  # unsubscribe from all channels\n\njulia> wait_until_unsubscribed(subscriber);\n\njulia> subscriber.is_subscribed\nfalse\n\njulia> subscriber.subscriptions\nSet{String}()\n\n\n\n\n\n","category":"function"},{"location":"pubsub/#Jedis.unsubscribe","page":"Pub/Sub","title":"Jedis.unsubscribe","text":"unsubscribe([channels...]) -> nothing\n\nUnsubscribes the client from the given channels, or from all of them if none is given.\n\n\n\n\n\n","category":"function"},{"location":"pubsub/#Jedis.psubscribe","page":"Pub/Sub","title":"Jedis.psubscribe","text":"psubscribe(fn::Function,\n           pattern,\n           patterns...;\n           stop_fn::Function=(msg) -> false,\n           err_cb::Function=(err) -> log_error(err))\n\nListen for messages published to the given channels matching ghe given patterns in a do block. Optionally provide a stop function stop_fn(msg) which gets run as a callback everytime a  subscription message is received, the subscription loop breaks if the stop_fn returns true.  Optionally provide err_cb(err) function which gets run on encountering an exception in the main  subscription loop.\n\nExamples\n\njulia> patterns = [\"first*\", \"second*\"];\n\njulia> publisher = Client();\n\njulia> subscriber = Client();\n\njulia> stop_fn(msg) = msg[end] == \"close subscription\";  # stop the subscription loop if the message matches\n\njulia> messages = [];\n\njulia> @async psubscribe(patterns...; stop_fn=stop_fn, client=subscriber) do msg\n           push!(messages, msg)\n       end;  # Without @async this function will block, alternatively use Thread.@spawn\n\njulia> wait_until_subscribed(subscriber);\n\njulia> subscriber.is_subscribed\ntrue\n\njulia> subscriber.psubscriptions\nSet{String} with 2 elements:\n  \"first*\"\n  \"second*\"\n\njulia> publish(\"first_pattern\", \"hello\"; client=publisher);\n\njulia> publish(\"second_pattern\", \"world\"; client=publisher);\n\njulia> println(messages)\nAny[[\"pmessage\", \"first*\", \"first_pattern\", \"hello\"], [\"pmessage\", \"second*\", \"second_pattern\", \"world\"]]  # message has the format [<message type>, <pattern>, <channel>, <actual message>]\n\njulia> punsubscribe(\"first*\"; client=subscriber);\n\njulia> wait_until_pattern_unsubscribed(subscriber, \"first*\");\n\njulia> subscriber.psubscriptions\nSet{String} with 1 element:\n  \"second*\"\n\njulia> punsubscribe(; client=subscriber);  # unsubscribe from all patterns\n\njulia> wait_until_unsubscribed(subscriber);\n\njulia> subscriber.is_subscribed\nfalse\n\njulia> subscriber.psubscriptions\nSet{String}()\n\n\n\n\n\n","category":"function"},{"location":"pubsub/#Jedis.punsubscribe","page":"Pub/Sub","title":"Jedis.punsubscribe","text":"unsubscribe([channels...]) -> nothing\n\nUnsubscribes the client from the given patterns, or from all of them if none is given.\n\n\n\n\n\n","category":"function"},{"location":"pipeline/#Pipelining","page":"Pipelining","title":"Pipelining","text":"","category":"section"},{"location":"pipeline/","page":"Pipelining","title":"Pipelining","text":"Pipeline\nadd!\nexecute(command::AbstractArray, pipe::Pipeline)\nexecute(pipe::Pipeline; filter_multi_exec=true)\npipeline","category":"page"},{"location":"pipeline/#Jedis.Pipeline","page":"Pipelining","title":"Jedis.Pipeline","text":"Pipeline([client::Client=getglobalclient()]) -> Pipeline\n\nCreates a Pipeline client instance for executing commands in batch.\n\nAttributes\n\nclient::Client: Reference to the underlying Client connection.\nresp::AbstractString: Batched commands converted to RESP compliant string.\nn_commands::Integer: Number of commands currenrtly in the pipeline.\nmulti_exec::Bool: Used to track and filter MULTI/EXEC transactions.\nmulti_exec_bitmask::AbstractArray{Bool}: Used to track and filter MULTI/EXEC transactions.\n\nExamples\n\njulia> pipe = Pipeline();\n\njulia> set(\"key\", \"value\"; client=pipe);\n\njulia> get(\"key\"; client=pipe);\n\njulia> execute(pipe)\n2-element Array{String,1}:\n \"OK\"\n \"value\"\n\n\n\n\n\n","category":"type"},{"location":"pipeline/#Jedis.add!","page":"Pipelining","title":"Jedis.add!","text":"add!(pipe::Pipeline, command)\n\nAdd a RESP compliant command to a pipeline client.\n\n\n\n\n\n","category":"function"},{"location":"pipeline/#Jedis.execute-Tuple{AbstractArray,Pipeline}","page":"Pipelining","title":"Jedis.execute","text":"execute(command, pipe::Pipeline)\n\nAdd a RESP compliant command to a pipeline client.\n\nExamples\n\njulia> pipe = Pipeline();\n\njulia> execute([\"SET\", \"key\", \"value\"]; client=pipe);\n\njulia> execute([\"GET\", \"key\"]; client=pipe);\n\njulia> execute(pipe)\n2-element Array{String,1}:\n \"OK\"\n \"value\"\n\n\n\n\n\n","category":"method"},{"location":"pipeline/#Jedis.execute-Tuple{Pipeline}","page":"Pipelining","title":"Jedis.execute","text":"execute(pipe::Pipeline[; filter_multi_exec=true])\n\nExecute commands batched in a pipeline client, optionally filter out MULTI transaction responses before the EXEC call, e.g. \"QUEUED\".\n\nExamples\n\njulia> pipe = Pipeline();\n\njulia> set(\"key\", \"value\"; client=pipe);\n\njulia> get(\"key\"; client=pipe);\n\njulia> multi(; client=pipe);\n\njulia> get(\"key\"; client=pipe);\n\njulia> get(\"key\"; client=pipe);\n\njulia> exec(; client=pipe);\n\njulia> execute(pipe)\n2-element Array{String,1}:\n \"OK\"\n \"value\"\n [\"value\", \"value\"]  # Only the response from final exec() call is returned\n\n\n\n\n\n","category":"method"},{"location":"pipeline/#Base.pipeline","page":"Pipelining","title":"Base.pipeline","text":"pipeline(fn::Function[; clientt=get_global_client(), filter_multi_exec=true])\n\nExecute commands batched in a pipeline client in a do block, optionally filter out MULTI transaction  responses before the EXEC call, e.g. \"QUEUED\".\n\nExamples\n\njulia> pipeline() do pipe\n           lpush(\"example\", 1, 2, 3, 4; client=pipe)\n           lpop(\"example\"; client=pipe)\n           rpop(\"example\"; client=pipe)\n           multi_exec(; client=pipe) do\n               lpop(\"example\"; client=pipe)\n               rpop(\"example\"; client=pipe)\n           end\n           lpop(\"example\"; client=pipe)\n       end\n5-element Array{Any,1}:\n 4  # Integer response from lpush\n \"4\"  # String response from lpop\n \"1\"  # String response from rpop\n [\"3\", \"2\"]  # Array of String response from multi_exec do block, with responeses before the exec call filtered out\n nothing  # Nil response from final lpop\n\n\n\n\n\n","category":"function"},{"location":"commands/#Redis-Commands","page":"Commands","title":"Redis Commands","text":"","category":"section"},{"location":"commands/","page":"Commands","title":"Commands","text":"Jedis commands all share a common interface, if the client kwarg is not provided then the Jedis.GLOBAL_CLIENT instance will be used:","category":"page"},{"location":"commands/","page":"Commands","title":"Commands","text":"command(args...; kwargs..., client=get_global_client())","category":"page"},{"location":"commands/#Full-list-of-Jedis-commands:","page":"Commands","title":"Full list of Jedis commands:","text":"","category":"section"},{"location":"commands/","page":"Commands","title":"Commands","text":"auth\nselect\nping\nflushdb\nflushall\nquit\nset\nJedis.get\ndel\nexists\nhexists\nkeys\nhkeys\nsetex\nexpire\nttl\nmulti\nexec\nmulti_exec\nhset\nhget\nhgetall\nhmget\nhdel\nlpush\nrpush\nlpos\nlrem\nlpop\nrpop\nblpop\nbrpop\nllen\nlrange\nincr\nincrby\nincrbyfloat\nhincrby\nhincrbyfloat\nzincrby","category":"page"},{"location":"commands/#Jedis.auth","page":"Commands","title":"Jedis.auth","text":"auth(password[, username])\n\nAuthenticate to the server.\n\n\n\n\n\n","category":"function"},{"location":"commands/#Jedis.select","page":"Commands","title":"Jedis.select","text":"select(database)\n\nChange the selected database for the current connection.\n\n\n\n\n\n","category":"function"},{"location":"commands/#Jedis.ping","page":"Commands","title":"Jedis.ping","text":"ping()\n\nPing the server.\n\n\n\n\n\n","category":"function"},{"location":"commands/#Jedis.flushdb","page":"Commands","title":"Jedis.flushdb","text":"flushdb([; async=false])\n\nRemove all keys from the current database.\n\n\n\n\n\n","category":"function"},{"location":"commands/#Jedis.flushall","page":"Commands","title":"Jedis.flushall","text":"flushall([; async=false])\n\nRemove all keys from all databases.\n\n\n\n\n\n","category":"function"},{"location":"commands/#Jedis.quit","page":"Commands","title":"Jedis.quit","text":"quit()\n\nClose the connection.\n\n\n\n\n\n","category":"function"},{"location":"commands/#Jedis.set","page":"Commands","title":"Jedis.set","text":"set(key, value)\n\nSet the string value of a key.\n\n\n\n\n\n","category":"function"},{"location":"commands/#Base.get","page":"Commands","title":"Base.get","text":"get(key)\n\nGet the value of a key.\n\n\n\n\n\n","category":"function"},{"location":"commands/#Jedis.del","page":"Commands","title":"Jedis.del","text":"del(key[, keys...])\n\nDelete a key.\n\n\n\n\n\n","category":"function"},{"location":"commands/#Jedis.exists","page":"Commands","title":"Jedis.exists","text":"exists(key[, keys...])\n\nDetermine if a key exists.\n\n\n\n\n\n","category":"function"},{"location":"commands/#Jedis.hexists","page":"Commands","title":"Jedis.hexists","text":"hexists(key, field)\n\nDetermine if a hash field exists.\n\n\n\n\n\n","category":"function"},{"location":"commands/#Base.keys","page":"Commands","title":"Base.keys","text":"keys(pattern)\n\nFind all keys matching the pattern.\n\n\n\n\n\n","category":"function"},{"location":"commands/#Jedis.hkeys","page":"Commands","title":"Jedis.hkeys","text":"hkeys(key)\n\nGet all fields in a hash.\n\n\n\n\n\n","category":"function"},{"location":"commands/#Jedis.setex","page":"Commands","title":"Jedis.setex","text":"setex(key, seconds, value)\n\nSet the value and expiration of a key.\n\n\n\n\n\n","category":"function"},{"location":"commands/#Jedis.expire","page":"Commands","title":"Jedis.expire","text":"expire(key, seconds)\n\nSet a key's tiem to live in seconds.\n\n\n\n\n\n","category":"function"},{"location":"commands/#Jedis.ttl","page":"Commands","title":"Jedis.ttl","text":"ttl(key)\n\nGet the time to live for a key.\n\n\n\n\n\n","category":"function"},{"location":"commands/#Jedis.multi","page":"Commands","title":"Jedis.multi","text":"multi()\n\nMark the start of a transaction block.\n\nExamples\n\njulia> multi()\n\"OK\"\n\njulia> set(\"key\", \"value\")\n\"QUEUED\"\n\njulia> get(\"key\")\n\"QUEUED\"\n\njulia> exec()\n2-element Array{String,1}:\n \"OK\"\n \"value\"\n\n\n\n\n\n","category":"function"},{"location":"commands/#Jedis.exec","page":"Commands","title":"Jedis.exec","text":"exec()\n\nExecute all commands issued after MULTI.\n\nExamples\n\njulia> multi()\n\"OK\"\n\njulia> set(\"key\", \"value\")\n\"QUEUED\"\n\njulia> get(\"key\")\n\"QUEUED\"\n\njulia> exec()\n2-element Array{String,1}:\n \"OK\"\n \"value\"\n\n\n\n\n\n","category":"function"},{"location":"commands/#Jedis.multi_exec","page":"Commands","title":"Jedis.multi_exec","text":"multi_exec(fn::Function)\n\nExecute a MULTI/EXEC transction in a do block.\n\nExamples\n\njulia> multi_exec() do \n           set(\"key\", \"value\")\n           get(\"key\")\n           get(\"key\")\n       end\n3-element Array{String,1}:\n \"OK\"\n \"value\"\n \"value\"\n\n\n\n\n\n","category":"function"},{"location":"commands/#Jedis.hset","page":"Commands","title":"Jedis.hset","text":"hset(key, field, value)\n\nSet the string value of a hash field.\n\n\n\n\n\n","category":"function"},{"location":"commands/#Jedis.hget","page":"Commands","title":"Jedis.hget","text":"hget(key, field)\n\nGet the value of a hash field.\n\n\n\n\n\n","category":"function"},{"location":"commands/#Jedis.hgetall","page":"Commands","title":"Jedis.hgetall","text":"hgetall(key)\n\nGet all the fields and values in a hash.\n\n\n\n\n\n","category":"function"},{"location":"commands/#Jedis.hmget","page":"Commands","title":"Jedis.hmget","text":"hmget(key, field[, fields...])\n\nGet the values of all the given hash fields.\n\n\n\n\n\n","category":"function"},{"location":"commands/#Jedis.hdel","page":"Commands","title":"Jedis.hdel","text":"hdel(key, field[, fields...])\n\nDelete one or more hash fields.\n\n\n\n\n\n","category":"function"},{"location":"commands/#Jedis.lpush","page":"Commands","title":"Jedis.lpush","text":"lpush(key, element[, elements...])\n\nPrepend one or multiple elements to a list.\n\n\n\n\n\n","category":"function"},{"location":"commands/#Jedis.rpush","page":"Commands","title":"Jedis.rpush","text":"rpush(key, element[, elements...])\n\nAppend one or multiple elements to a list.\n\n\n\n\n\n","category":"function"},{"location":"commands/#Jedis.lpos","page":"Commands","title":"Jedis.lpos","text":"lpos(key, element[, rank, num_matches, len])\n\nReturn the index of matching element on a list.\n\n\n\n\n\n","category":"function"},{"location":"commands/#Jedis.lrem","page":"Commands","title":"Jedis.lrem","text":"lrem(key, count, element)\n\nRemove elements from a list.\n\n\n\n\n\n","category":"function"},{"location":"commands/#Jedis.lpop","page":"Commands","title":"Jedis.lpop","text":"lpop(key)\n\nRemove and get the first element in a list.\n\n\n\n\n\n","category":"function"},{"location":"commands/#Jedis.rpop","page":"Commands","title":"Jedis.rpop","text":"rpop(key)\n\nRemove and get the last element in a list.\n\n\n\n\n\n","category":"function"},{"location":"commands/#Jedis.blpop","page":"Commands","title":"Jedis.blpop","text":"blpop(key[, key...; timeout=0])\n\nRemove and get the first element in a list, or block until one is available.\n\n\n\n\n\n","category":"function"},{"location":"commands/#Jedis.brpop","page":"Commands","title":"Jedis.brpop","text":"brpop(key[, key...; timeout=0])\n\nRemove and get the last element in a list, or block until one is available.\n\n\n\n\n\n","category":"function"},{"location":"commands/#Jedis.llen","page":"Commands","title":"Jedis.llen","text":"llen(key)\n\nGet the length of a list.\n\n\n\n\n\n","category":"function"},{"location":"commands/#Jedis.lrange","page":"Commands","title":"Jedis.lrange","text":"lrange(key, start, stop)\n\nGet a range of elements from a list.\n\n\n\n\n\n","category":"function"},{"location":"commands/#Jedis.incr","page":"Commands","title":"Jedis.incr","text":"incr(key)\n\nIncrement the integer value of a key by one.\n\n\n\n\n\n","category":"function"},{"location":"commands/#Jedis.incrby","page":"Commands","title":"Jedis.incrby","text":"incrby(key, increment)\n\nIncrement the integer value of a key by the given amount.\n\n\n\n\n\n","category":"function"},{"location":"commands/#Jedis.incrbyfloat","page":"Commands","title":"Jedis.incrbyfloat","text":"incrbyfloat(key, increment)\n\nIncrement the float value of a key by the given amount.\n\n\n\n\n\n","category":"function"},{"location":"commands/#Jedis.hincrby","page":"Commands","title":"Jedis.hincrby","text":"hincrby(key, field, increment)\n\nIncrement the integer value of a hash field by the given number.\n\n\n\n\n\n","category":"function"},{"location":"commands/#Jedis.hincrbyfloat","page":"Commands","title":"Jedis.hincrbyfloat","text":"hincrbyfloat(key, field, increment)\n\nIncrement the float value of a hash field by the given number.\n\n\n\n\n\n","category":"function"},{"location":"commands/#Jedis.zincrby","page":"Commands","title":"Jedis.zincrby","text":"zincrby(key, field, member)\n\nIncrement the score of a member in a sorted set.\n\n\n\n\n\n","category":"function"},{"location":"#Jedis.jl","page":"Home","title":"Jedis.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"A lightweight Redis client, implemented in Julia.","category":"page"},{"location":"#Key-Features","page":"Home","title":"Key Features","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"This client supports:","category":"page"},{"location":"","page":"Home","title":"Home","text":"Basic command execution\nExecuting commands with a global client instance\nExecuting commands atomically per client instance, with the help of socket locks\nPipelining\nTransactions\nPub/Sub\nRedis locks\nSupport for secured Redis connection (SSL/TLS)","category":"page"},{"location":"lock/#Redis-Locks","page":"Locks","title":"Redis Locks","text":"","category":"section"},{"location":"lock/","page":"Locks","title":"Locks","text":"redis_lock\nacquire_lock\nrelease_lock\nislocked","category":"page"},{"location":"lock/#Jedis.redis_lock","page":"Locks","title":"Jedis.redis_lock","text":"redis_lock(fn::Function, lock_key[, lock_value=string(uuid4()); client::Client=get_global_client(), timeout=nothing, seconds_between_checks=0.1])\n\nEnters a redis lock context, blocks if the lock already exists.\n\nArguments\n\nlock_key: Name of the redis lock key.\nlock_value=string(uuid4()): Token value of the redis lock, ensures that only owners of a lock can release it, defaults to UUID.\nclient::Client=get_global_client(): Redis client instance, defualts to global instance.\ntimeout=nothing: Timeout of the lock in seconds, if nothing then lock will not timeout.\nseconds_between_checks=0.1: Sleep time (seconds) between each lock exists check.\n\nExamples\n\njulia> @async redis_lock(\"example_lock\") do\n           sleep(3)  # Lock will exist for 3 seconds\n       end\n\njulia> redis_lock(\"example_lock\") do\n           println(\"This message will be delayed by 3 seconds!\")  # Blocked by first lock\n       end\n\n\n\n\n\n","category":"function"},{"location":"lock/#Jedis.acquire_lock","page":"Locks","title":"Jedis.acquire_lock","text":"acquire_lock(lock_key[, lock_value=string(uuid4()); client::Client=get_global_client(), timeout=nothing, seconds_between_checks=0.1])\n\nCreates a redis lock key, blocks if the lock already exists, returns the lock_value.\n\nIt is preferred that redis_lock is used instead as it will handle the acquiring and releasing of  locks within a do-block context.\n\nArguments\n\nlock_key: Name of the redis lock key.\nlock_value=string(uuid4()): Token value of the redis lock, ensures that only owners of a lock can release it, defaults to UUID.\nclient::Client=get_global_client(): Redis client instance, defualts to global instance.\ntimeout=nothing: Timeout of the lock in seconds, if nothing then lock will not timeout.\nseconds_between_checks=0.1: Sleep time (seconds) between each lock exists check.\n\nExamples\n\njulia> acquire_lock(\"example_lock\", \"lock_token\")\n\"lock_token\"\n\njulia> release_lock(\"example_lock\", \"wrong_token\")\nfalse  # Returns false if the lock value does not match\n\njulia> release_lock(\"example_lock\", \"lock_token\")\ntrue  # Returns true if the lock value matches and lock was successfully released\n\n\n\n\n\n","category":"function"},{"location":"lock/#Jedis.release_lock","page":"Locks","title":"Jedis.release_lock","text":"release_lock(lock_key, lock_value[; client::Client=get_global_client()])::Bool\n\nReturns true if the lock value matches and lock was successfully released, false otherwise.\n\nIt is preferred that redis_lock is used instead as it will handle the acquiring and releasing of  locks within a do-block context.\n\nExamples\n\njulia> acquire_lock(\"example_lock\", \"lock_token\")\n\"lock_token\"\n\njulia> release_lock(\"example_lock\", \"wrong_token\")\nfalse  # Returns false if the lock value does not match\n\njulia> release_lock(\"example_lock\", \"lock_token\")\ntrue  # Returns true if the lock value matches and lock was successfully released\n\n\n\n\n\n","category":"function"}]
}
