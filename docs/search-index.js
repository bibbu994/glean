var N=null,E="",T="t",U="u",searchIndex={};
var R=["string","commonmetricdata","dynamic_label","glean","option","test_get_value","Test-only API (exported for FFI purposes).","histogram","Public facing API for setting the metric to a date/time…","datetime","test_get_value_as_json_string","Create a new memory distribution metric.","accumulate_samples_signed","Accumulates the provided signed samples in the metric.","timeunit","duration","set_start","Start tracking time for the provided metric.","timerid","functional","Set to the specified value.","should_record","glean_core","jsonvalue","Collect a snapshot for the given ping from storage and…","pingtype","Snapshot the given store and optionally clear it.","database","result","Create and initialize a new Glean object.","configuration","snapshot","hashmap","to_string","try_from","try_into","borrow_mut","to_owned","clone_into","type_id","borrow","typeid","glean_core::metrics","dataerror","to_bytes","glean_core::ping","glean_core::storage","meta_mut","errorkind","default","lifetime","histogramtype","labeledmetric","memoryunit","formatter","serialize","deserialize","backtrace","CommonMetricData","Configuration","Lifetime","ErrorType","PingType","HistogramType","MemoryUnit","TimeUnit","BooleanMetric","CounterMetric","CustomDistributionMetric","DatetimeMetric","EventMetric","LabeledMetric","MemoryDistributionMetric","QuantityMetric","StringMetric","StringListMetric","TimespanMetric","TimingDistributionMetric","UuidMetric","MetricType","PingMaker","StorageManager","FfiConfiguration"];
searchIndex["glean_core"]={"doc":"Glean is a modern approach for recording and sending…","i":[[3,R[58],R[22],"The common set of data shared across all different metric…",N,N],[12,"name",E,"The metric's name.",0,N],[12,"category",E,"The metric's category.",0,N],[12,"send_in_pings",E,"List of ping names to include this metric in.",0,N],[12,R[50],E,"The metric's lifetime.",0,N],[12,"disabled",E,"Whether or not the metric is disabled.",0,N],[12,R[2],E,"Dynamic label. When a LabeledMetric factory creates the…",0,N],[3,"Error",E,"A specialized [`Error`] type for this crate's operations.",N,N],[3,R[59],E,"The Glean configuration.",N,N],[12,"upload_enabled",E,"Whether upload should be enabled.",1,N],[12,"data_path",E,"Path to a directory to store all data in.",1,N],[12,"application_id",E,"The application ID (will be sanitized during…",1,N],[12,"max_events",E,"The maximum number of events to store before sending a…",1,N],[3,"Glean",E,"The object holding meta information about a Glean instance.",N,N],[4,R[60],E,"The supported metrics' lifetimes.",N,N],[13,"Ping",E,"The metric is reset with each sent ping",2,N],[13,"Application",E,"The metric is reset on application restart",2,N],[13,"User",E,"The metric is reset with each user profile",2,N],[4,R[61],E,"The possible error types for metric recording.",N,N],[13,"InvalidValue",E,"For when the value to be recorded does not match the…",3,N],[13,"InvalidLabel",E,"For when the label of a labeled metric does not match the…",3,N],[5,"test_get_num_recorded_errors",E,"Get the number of recorded errors for the given metric and…",N,[[[R[3]],[R[1]],["errortype"],[R[4],["str"]],["str"]],[[R[28],["i32",R[0]]],[R[0]],["i32"]]]],[0,"ac_migration",E,"A module containing glean-core code for supporting data…",N,N],[11,"as_str",E,"String representation of the lifetime.",2,[[],["str"]]],[11,"new",E,"Create a new metadata object.",0,[[[R[0]],["into",[R[0]]]],[R[1]]]],[11,R[21],E,"Whether this metric should be recorded.",0,[[["self"]],["bool"]]],[11,"storage_names",E,"The list of storages this metric should be recorded into.",0,[[["self"]]]],[11,"kind",E,"Access the [`ErrorKind`] member.",4,[[["self"]],[R[48]]]],[11,"utf8_error",E,"Return a new UTF-8 error",4,[[],["error"]]],[11,R[33],E,"The error type's metric name",3,[[["self"]],["str"]]],[0,"metrics",E,"The different metric types supported by the Glean SDK to…",N,N],[3,R[66],R[42],"A boolean metric.",N,N],[3,R[67],E,"A counter metric.",N,N],[3,R[69],E,"A datetime metric.",N,N],[3,R[70],E,"An event metric.",N,N],[3,R[68],E,"A custom distribution metric.",N,N],[3,R[71],E,"A labeled metric.",N,N],[3,R[72],E,"A memory distribution metric.",N,N],[3,R[62],E,"Stores information about a ping.",N,N],[12,"name",E,"The name of the ping.",5,N],[12,"include_client_id",E,"Whether the ping should include the client ID.",5,N],[3,R[73],E,"A quantity metric.",N,N],[3,R[74],E,"A string metric.",N,N],[3,R[75],E,"A string list metric.",N,N],[3,R[76],E,"A timespan metric.",N,N],[3,R[77],E,"A timing distribution metric.",N,N],[3,R[78],E,"An UUID metric.",N,N],[4,R[63],E,"Different kinds of histograms.",N,N],[13,"Linear",E,"A histogram with linear distributed buckets.",6,N],[13,"Exponential",E,"A histogram with exponential distributed buckets.",6,N],[4,R[64],E,"Different resolutions supported by the memory related…",N,N],[13,"Byte",E,E,7,N],[13,"Kilobyte",E,E,7,N],[13,"Megabyte",E,E,7,N],[13,"Gigabyte",E,E,7,N],[4,R[65],E,"Different resolutions supported by the time related metric…",N,N],[13,"Nanosecond",E,"Truncate to nanosecond precision.",8,N],[13,"Microsecond",E,"Truncate to microsecond precision.",8,N],[13,"Millisecond",E,"Truncate to millisecond precision.",8,N],[13,"Second",E,"Truncate to second precision.",8,N],[13,"Minute",E,"Truncate to minute precision.",8,N],[13,"Hour",E,"Truncate to hour precision.",8,N],[13,"Day",E,"Truncate to day precision.",8,N],[4,"Metric",E,"The available metrics.",N,N],[13,"Boolean",E,"A boolean metric. See `BooleanMetric` for more information.",9,N],[13,"Counter",E,"A counter metric. See `CounterMetric` for more information.",9,N],[13,"CustomDistributionExponential",E,"A custom distribution with precomputed exponential…",9,N],[13,"CustomDistributionLinear",E,"A custom distribution with precomputed linear bucketing.…",9,N],[13,"Datetime",E,"A datetime metric. See `DatetimeMetric` for more…",9,N],[13,"Experiment",E,"An experiment metric. See `ExperimentMetric` for more…",9,N],[13,"Quantity",E,"A quantity metric. See `QuantityMetric` for more…",9,N],[13,"String",E,"A string metric. See `StringMetric` for more information.",9,N],[13,"StringList",E,"A string list metric. See `StringListMetric` for more…",9,N],[13,"Uuid",E,"A UUID metric. See `UuidMetric` for more information.",9,N],[13,"Timespan",E,"A timespan metric. See `TimespanMetric` for more…",9,N],[13,"TimingDistribution",E,"A timing distribution. See `TimingDistributionMetric` for…",9,N],[13,"MemoryDistribution",E,"A memory distribution. See `MemoryDistributionMetric` for…",9,N],[5,"combine_base_identifier_and_label",E,"Combines a metric's base identifier and label",N,[[["str"]],[R[0]]]],[5,R[2],E,"Validate a dynamic label, changing it to OTHER_LABEL if…",N,[[[R[3]],[R[1]],["str"]],[R[0]]]],[5,"strip_label",E,"Strips the label off of a complete identifier",N,[[["str"]],["str"]]],[11,"new",E,"Create a new boolean metric.",10,[[[R[1]]],["self"]]],[11,"set",E,"Set to the specified boolean value.",10,[[["self"],[R[3]],["bool"]]]],[11,R[5],E,R[6],10,[[["self"],[R[3]],["str"]],[[R[4],["bool"]],["bool"]]]],[11,"new",E,"Create a new counter metric.",11,[[[R[1]]],["self"]]],[11,"add",E,"Increase the counter by `amount`.",11,[[["self"],[R[3]],["i32"]]]],[11,R[5],E,R[6],11,[[["self"],[R[3]],["str"]],[[R[4],["i32"]],["i32"]]]],[11,"new",E,R[11],12,[[[R[51]],[R[1]],["u64"]],["self"]]],[11,R[12],E,R[13],12,[[["self"],[R[3]],["vec",["i64"]],["i64"]]]],[11,R[5],E,R[6],12,[[["self"],[R[3]],["str"]],[[R[7],["box"]],[R[4],[R[7]]]]]],[11,R[10],E,R[6],12,[[["self"],[R[3]],["str"]],[[R[0]],[R[4],[R[0]]]]]],[11,"new",E,"Create a new datetime metric.",13,[[[R[14]],[R[1]]],["self"]]],[11,"set_with_details",E,R[8],13,[[["self"],[R[3]],["u32"],["i32"]]]],[11,"set",E,R[8],13,[[["self"],[R[3]],[R[4],[R[9]]],[R[9],["fixedoffset"]]]]],[11,"test_get_value_as_string",E,R[6],13,[[["self"],[R[3]],["str"]],[[R[0]],[R[4],[R[0]]]]]],[11,"new",E,"Create a new event metric.",14,[[[R[0]],["vec",[R[0]]],[R[1]]],["self"]]],[11,"record",E,"Record an event.",14,[[["self"],[R[3]],["into",[R[4]]],[R[4],[R[32]]],["u64"]]]],[11,"test_has_value",E,R[6],14,[[["self"],[R[3]],["str"]],["bool"]]],[11,R[5],E,R[6],14,[[["self"],[R[3]],["str"]],[[R[4],["vec"]],["vec",["recordedeventdata"]]]]],[11,R[10],E,R[6],14,[[["self"],[R[3]],["str"]],[R[0]]]],[11,"new",E,"Create a new labeled metric from the given metric instance…",15,[[["vec",[R[0]]],[T],[R[4],["vec"]]],[R[52]]]],[11,"get",E,"Get a specific metric for a given label.",15,[[["self"],["str"]],[T]]],[11,"new",E,R[11],16,[[[R[1]],[R[53]]],["self"]]],[11,"accumulate",E,"Accumulates the provided sample in the metric.",16,[[["self"],[R[3]],["u64"]]]],[11,R[12],E,R[13],16,[[["self"],[R[3]],["vec",["i64"]],["i64"]]]],[11,R[5],E,R[6],16,[[["self"],[R[3]],["str"]],[[R[7],[R[19]]],[R[4],[R[7]]]]]],[11,R[10],E,R[6],16,[[["self"],[R[3]],["str"]],[[R[0]],[R[4],[R[0]]]]]],[11,"as_bytes",E,"Convert a value in the given unit to bytes.",7,[[["u64"]],["u64"]]],[11,"new",E,"Create a new ping type for the given name and whether to…",5,[[[R[0]],["into",[R[0]]],["bool"]],["self"]]],[11,"send",E,"Send the ping.",5,[[["self"],[R[3]],["bool"]],[[R[28],["bool"]],["bool"]]]],[11,"new",E,"Create a new quantity metric.",17,[[[R[1]]],["self"]]],[11,"set",E,"Set the value. Must be non-negative.",17,[[["self"],[R[3]],["i64"]]]],[11,R[5],E,R[6],17,[[["self"],[R[3]],["str"]],[["i64"],[R[4],["i64"]]]]],[11,"new",E,"Create a new string metric.",18,[[[R[1]]],["self"]]],[11,"set",E,R[20],18,[[["self"],[R[3]],[R[0]],["into",[R[0]]]]]],[11,R[5],E,R[6],18,[[["self"],[R[3]],["str"]],[[R[0]],[R[4],[R[0]]]]]],[11,"new",E,"Create a new string list metric.",19,[[[R[1]]],["self"]]],[11,"add",E,"Add a new string to the list.",19,[[["self"],[R[3]],[R[0]],["into",[R[0]]]]]],[11,"set",E,"Set to a specific list of strings.",19,[[["self"],[R[3]],[R[0]],["vec",[R[0]]]]]],[11,R[5],E,R[6],19,[[["self"],[R[3]],["str"]],[["vec",[R[0]]],[R[4],["vec"]]]]],[11,R[10],E,R[6],19,[[["self"],[R[3]],["str"]],[[R[0]],[R[4],[R[0]]]]]],[11,"format_pattern",E,"How to format the given TimeUnit, truncating the time if…",8,[[],["str"]]],[11,"duration_convert",E,"Convert a duration to the requested time unit.",8,[[[R[15]]],["u64"]]],[11,"as_nanos",E,"Convert a duration in the given unit to nanoseconds.",8,[[["u64"]],["u64"]]],[11,"new",E,"Create a new timespan metric.",20,[[[R[14]],[R[1]]],["self"]]],[11,R[16],E,R[17],20,[[["self"],[R[3]],["u64"]]]],[11,"set_stop",E,"Stop tracking time for the provided metric. Sets the…",20,[[["self"],[R[3]],["u64"]]]],[11,"cancel",E,"Abort a previous `start` call. No error is recorded if no…",20,[[["self"]]]],[11,"set_raw",E,"Explicitly set the timespan value.",20,[[["self"],[R[3]],[R[15]],["bool"]]]],[11,R[5],E,R[6],20,[[["self"],[R[3]],["str"]],[[R[4],["u64"]],["u64"]]]],[11,"new",E,"Create a new timing distribution metric.",21,[[[R[14]],[R[1]]],["self"]]],[11,R[16],E,R[17],21,[[["self"],[R[3]],["u64"]],[R[18]]]],[11,"set_stop_and_accumulate",E,"Stop tracking time for the provided metric and associated…",21,[[["self"],[R[3]],[R[18]],["u64"]]]],[11,"cancel",E,"Abort a previous `set_start` call. No error is recorded if…",21,[[["self"],[R[18]]]]],[11,R[12],E,R[13],21,[[["self"],[R[3]],["vec",["i64"]],["i64"]]]],[11,R[5],E,R[6],21,[[["self"],[R[3]],["str"]],[[R[7],[R[19]]],[R[4],[R[7]]]]]],[11,R[10],E,R[6],21,[[["self"],[R[3]],["str"]],[[R[0]],[R[4],[R[0]]]]]],[11,"new",E,"Create a new UUID metric",22,[[[R[1]]],["self"]]],[11,"set",E,R[20],22,[[["self"],[R[3]],["uuid"]]]],[11,"generate_and_set",E,"Generate a new random UUID and set the metric to it.",22,[[["self"],[R[3]]],["uuid"]]],[11,R[5],E,R[6],22,[[["self"],[R[3]],["str"]],[[R[0]],[R[4],[R[0]]]]]],[6,"TimerId",E,"Identifier for a running timer.",N,N],[8,R[79],E,"A `MetricType` describes common behavior across all metrics.",N,N],[10,"meta",E,"Access the stored metadata",23,[[["self"]],[R[1]]]],[10,R[47],E,"Access the stored metadata mutable",23,[[["self"]],[R[1]]]],[11,R[21],E,"Whether this metric should currently be recorded",23,[[["self"],[R[3]]],["bool"]]],[11,"ping_section",E,"The ping section the metric fits into.",9,[[["self"]],["str"]]],[11,"as_json",E,"The JSON representation of the metric's data",9,[[["self"]],[R[23]]]],[0,"ping",R[22],"Ping collection, assembly & submission.",N,N],[3,R[80],R[45],"Collect a ping's data, assemble it into its full payload…",N,N],[11,"new",E,"Create a new PingMaker.",24,[[],["self"]]],[11,"collect",E,R[24],24,[[["self"],[R[3]],[R[25]]],[[R[4],[R[23]]],[R[23]]]]],[11,"collect_string",E,R[24],24,[[["self"],[R[3]],[R[25]]],[[R[0]],[R[4],[R[0]]]]]],[11,"store_ping",E,"Store a ping to disk in the pings directory.",24,[[["self"],["path"],[R[23]],["str"]],[R[28]]]],[11,"clear_pending_pings",E,"Clear any pending pings in the queue.",24,[[["self"],["path"]],[R[28]]]],[0,"storage",R[22],"Storage snapshotting.",N,N],[3,R[81],R[46],"Snapshot metrics from the underlying database.",N,N],[11,R[31],E,R[26],25,[[["self"],[R[27]],["str"],["bool"]],[[R[0]],[R[4],[R[0]]]]]],[11,"snapshot_as_json",E,R[26],25,[[["self"],[R[27]],["str"],["bool"]],[[R[4],[R[23]]],[R[23]]]]],[11,"snapshot_metric",E,"Get the current value of a single metric identified by name.",25,[[["self"],[R[27]],["str"]],[[R[4],["metric"]],["metric"]]]],[11,"snapshot_experiments_as_json",E,"Snapshot the experiments.",25,[[["self"],["str"],[R[27]]],[[R[4],[R[23]]],[R[23]]]]],[6,"Result",R[22],"A specialized [`Result`] type for this crate's operations.",N,N],[11,"new",E,R[29],26,[[[R[30]]],[R[28]]]],[11,"with_sequence_numbers",E,R[29],26,[[[R[0]],[R[32],[R[0],"i32"]],["i32"],[R[30]]],[R[28]]]],[11,"on_ready_to_send_pings",E,"Called when Glean is initialized to the point where it can…",26,[[["self"]],["bool"]]],[11,"set_upload_enabled",E,"Set whether upload is enabled or not.",26,[[["self"],["bool"]],["bool"]]],[11,"is_upload_enabled",E,"Determine whether upload is enabled.",26,[[["self"]],["bool"]]],[11,"get_application_id",E,"Get the application ID as specified on instantiation.",26,[[["self"]],["str"]]],[11,"get_data_path",E,"Get the data path of this instance.",26,[[["self"]],["path"]]],[11,"storage",E,"Get a handle to the database.",26,[[["self"]],[R[27]]]],[11,"event_storage",E,"Get a handle to the event database.",26,[[["self"]],["eventdatabase"]]],[11,"get_max_events",E,"Get the maximum number of events to store before sending a…",26,[[["self"]],["usize"]]],[11,R[31],E,"Take a snapshot for the given store and optionally clear it.",26,[[["self"],["str"],["bool"]],[R[0]]]],[11,"send_ping",E,"Send a ping.",26,[[["self"],[R[25]],["bool"]],[[R[28],["bool"]],["bool"]]]],[11,"send_pings_by_name",E,"Send a list of pings by name.",26,[[["self"],["bool"]],["bool"]]],[11,"send_ping_by_name",E,"Send a ping by name.",26,[[["self"],["str"],["bool"]],[[R[28],["bool"]],["bool"]]]],[11,"get_ping_by_name",E,"Get a `PingType` by name.",26,[[["self"],["str"]],[[R[25]],[R[4],[R[25]]]]]],[11,"register_ping_type",E,"Register a new `PingType`.",26,[[["self"],[R[25]]]]],[11,"set_experiment_active",E,"Indicate that an experiment is running. Glean will then…",26,[[["self"],[R[0]],[R[32],[R[0],R[0]]],[R[4],[R[32]]]]]],[11,"set_experiment_inactive",E,"Indicate that an experiment is no longer running.",26,[[["self"],[R[0]]]]],[11,"test_is_experiment_active",E,R[6],26,[[["self"],[R[0]]],["bool"]]],[11,"test_get_experiment_data_as_json",E,R[6],26,[[["self"],[R[0]]],[[R[0]],[R[4],[R[0]]]]]],[11,"test_clear_all_stores",E,R[6],26,[[["self"]]]],[11,"from",E,E,0,[[[T]],[T]]],[11,R[37],E,E,0,[[["self"]],[T]]],[11,R[38],E,E,0,[[["self"],[T]]]],[11,"into",E,E,0,[[],[U]]],[11,R[34],E,E,0,[[[U]],[R[28]]]],[11,R[35],E,E,0,[[],[R[28]]]],[11,R[36],E,E,0,[[["self"]],[T]]],[11,R[40],E,E,0,[[["self"]],[T]]],[11,R[39],E,E,0,[[["self"]],[R[41]]]],[11,"from",E,E,4,[[[T]],[T]]],[11,R[33],E,E,4,[[["self"]],[R[0]]]],[11,"into",E,E,4,[[],[U]]],[11,R[34],E,E,4,[[[U]],[R[28]]]],[11,R[35],E,E,4,[[],[R[28]]]],[11,R[36],E,E,4,[[["self"]],[T]]],[11,R[40],E,E,4,[[["self"]],[T]]],[11,R[39],E,E,4,[[["self"]],[R[41]]]],[11,"as_fail",E,E,4,[[["self"]],["fail"]]],[11,"from",E,E,1,[[[T]],[T]]],[11,R[37],E,E,1,[[["self"]],[T]]],[11,R[38],E,E,1,[[["self"],[T]]]],[11,"into",E,E,1,[[],[U]]],[11,R[34],E,E,1,[[[U]],[R[28]]]],[11,R[35],E,E,1,[[],[R[28]]]],[11,R[36],E,E,1,[[["self"]],[T]]],[11,R[40],E,E,1,[[["self"]],[T]]],[11,R[39],E,E,1,[[["self"]],[R[41]]]],[11,"from",E,E,26,[[[T]],[T]]],[11,"into",E,E,26,[[],[U]]],[11,R[34],E,E,26,[[[U]],[R[28]]]],[11,R[35],E,E,26,[[],[R[28]]]],[11,R[36],E,E,26,[[["self"]],[T]]],[11,R[40],E,E,26,[[["self"]],[T]]],[11,R[39],E,E,26,[[["self"]],[R[41]]]],[11,"from",E,E,2,[[[T]],[T]]],[11,R[37],E,E,2,[[["self"]],[T]]],[11,R[38],E,E,2,[[["self"],[T]]]],[11,"into",E,E,2,[[],[U]]],[11,R[34],E,E,2,[[[U]],[R[28]]]],[11,R[35],E,E,2,[[],[R[28]]]],[11,R[36],E,E,2,[[["self"]],[T]]],[11,R[40],E,E,2,[[["self"]],[T]]],[11,R[39],E,E,2,[[["self"]],[R[41]]]],[11,"from",E,E,3,[[[T]],[T]]],[11,"into",E,E,3,[[],[U]]],[11,R[34],E,E,3,[[[U]],[R[28]]]],[11,R[35],E,E,3,[[],[R[28]]]],[11,R[36],E,E,3,[[["self"]],[T]]],[11,R[40],E,E,3,[[["self"]],[T]]],[11,R[39],E,E,3,[[["self"]],[R[41]]]],[11,"from",R[42],E,6,[[[T]],[T]]],[11,R[37],E,E,6,[[["self"]],[T]]],[11,R[38],E,E,6,[[["self"],[T]]]],[11,"into",E,E,6,[[],[U]]],[11,R[34],E,E,6,[[[U]],[R[28]]]],[11,R[35],E,E,6,[[],[R[28]]]],[11,R[36],E,E,6,[[["self"]],[T]]],[11,R[40],E,E,6,[[["self"]],[T]]],[11,R[39],E,E,6,[[["self"]],[R[41]]]],[11,R[44],E,E,6,[[["self"]],[[R[43]],["vec",["u8"]],[R[28],["vec",R[43]]]]]],[11,"from",E,E,10,[[[T]],[T]]],[11,R[37],E,E,10,[[["self"]],[T]]],[11,R[38],E,E,10,[[["self"],[T]]]],[11,"into",E,E,10,[[],[U]]],[11,R[34],E,E,10,[[[U]],[R[28]]]],[11,R[35],E,E,10,[[],[R[28]]]],[11,R[36],E,E,10,[[["self"]],[T]]],[11,R[40],E,E,10,[[["self"]],[T]]],[11,R[39],E,E,10,[[["self"]],[R[41]]]],[11,"from",E,E,11,[[[T]],[T]]],[11,R[37],E,E,11,[[["self"]],[T]]],[11,R[38],E,E,11,[[["self"],[T]]]],[11,"into",E,E,11,[[],[U]]],[11,R[34],E,E,11,[[[U]],[R[28]]]],[11,R[35],E,E,11,[[],[R[28]]]],[11,R[36],E,E,11,[[["self"]],[T]]],[11,R[40],E,E,11,[[["self"]],[T]]],[11,R[39],E,E,11,[[["self"]],[R[41]]]],[11,"from",E,E,13,[[[T]],[T]]],[11,"into",E,E,13,[[],[U]]],[11,R[34],E,E,13,[[[U]],[R[28]]]],[11,R[35],E,E,13,[[],[R[28]]]],[11,R[36],E,E,13,[[["self"]],[T]]],[11,R[40],E,E,13,[[["self"]],[T]]],[11,R[39],E,E,13,[[["self"]],[R[41]]]],[11,"from",E,E,14,[[[T]],[T]]],[11,R[37],E,E,14,[[["self"]],[T]]],[11,R[38],E,E,14,[[["self"],[T]]]],[11,"into",E,E,14,[[],[U]]],[11,R[34],E,E,14,[[[U]],[R[28]]]],[11,R[35],E,E,14,[[],[R[28]]]],[11,R[36],E,E,14,[[["self"]],[T]]],[11,R[40],E,E,14,[[["self"]],[T]]],[11,R[39],E,E,14,[[["self"]],[R[41]]]],[11,"from",E,E,12,[[[T]],[T]]],[11,"into",E,E,12,[[],[U]]],[11,R[34],E,E,12,[[[U]],[R[28]]]],[11,R[35],E,E,12,[[],[R[28]]]],[11,R[36],E,E,12,[[["self"]],[T]]],[11,R[40],E,E,12,[[["self"]],[T]]],[11,R[39],E,E,12,[[["self"]],[R[41]]]],[11,"from",E,E,15,[[[T]],[T]]],[11,R[37],E,E,15,[[["self"]],[T]]],[11,R[38],E,E,15,[[["self"],[T]]]],[11,"into",E,E,15,[[],[U]]],[11,R[34],E,E,15,[[[U]],[R[28]]]],[11,R[35],E,E,15,[[],[R[28]]]],[11,R[36],E,E,15,[[["self"]],[T]]],[11,R[40],E,E,15,[[["self"]],[T]]],[11,R[39],E,E,15,[[["self"]],[R[41]]]],[11,"from",E,E,16,[[[T]],[T]]],[11,"into",E,E,16,[[],[U]]],[11,R[34],E,E,16,[[[U]],[R[28]]]],[11,R[35],E,E,16,[[],[R[28]]]],[11,R[36],E,E,16,[[["self"]],[T]]],[11,R[40],E,E,16,[[["self"]],[T]]],[11,R[39],E,E,16,[[["self"]],[R[41]]]],[11,"from",E,E,5,[[[T]],[T]]],[11,R[37],E,E,5,[[["self"]],[T]]],[11,R[38],E,E,5,[[["self"],[T]]]],[11,"into",E,E,5,[[],[U]]],[11,R[34],E,E,5,[[[U]],[R[28]]]],[11,R[35],E,E,5,[[],[R[28]]]],[11,R[36],E,E,5,[[["self"]],[T]]],[11,R[40],E,E,5,[[["self"]],[T]]],[11,R[39],E,E,5,[[["self"]],[R[41]]]],[11,"from",E,E,17,[[[T]],[T]]],[11,R[37],E,E,17,[[["self"]],[T]]],[11,R[38],E,E,17,[[["self"],[T]]]],[11,"into",E,E,17,[[],[U]]],[11,R[34],E,E,17,[[[U]],[R[28]]]],[11,R[35],E,E,17,[[],[R[28]]]],[11,R[36],E,E,17,[[["self"]],[T]]],[11,R[40],E,E,17,[[["self"]],[T]]],[11,R[39],E,E,17,[[["self"]],[R[41]]]],[11,"from",E,E,18,[[[T]],[T]]],[11,R[37],E,E,18,[[["self"]],[T]]],[11,R[38],E,E,18,[[["self"],[T]]]],[11,"into",E,E,18,[[],[U]]],[11,R[34],E,E,18,[[[U]],[R[28]]]],[11,R[35],E,E,18,[[],[R[28]]]],[11,R[36],E,E,18,[[["self"]],[T]]],[11,R[40],E,E,18,[[["self"]],[T]]],[11,R[39],E,E,18,[[["self"]],[R[41]]]],[11,"from",E,E,19,[[[T]],[T]]],[11,R[37],E,E,19,[[["self"]],[T]]],[11,R[38],E,E,19,[[["self"],[T]]]],[11,"into",E,E,19,[[],[U]]],[11,R[34],E,E,19,[[[U]],[R[28]]]],[11,R[35],E,E,19,[[],[R[28]]]],[11,R[36],E,E,19,[[["self"]],[T]]],[11,R[40],E,E,19,[[["self"]],[T]]],[11,R[39],E,E,19,[[["self"]],[R[41]]]],[11,"from",E,E,20,[[[T]],[T]]],[11,"into",E,E,20,[[],[U]]],[11,R[34],E,E,20,[[[U]],[R[28]]]],[11,R[35],E,E,20,[[],[R[28]]]],[11,R[36],E,E,20,[[["self"]],[T]]],[11,R[40],E,E,20,[[["self"]],[T]]],[11,R[39],E,E,20,[[["self"]],[R[41]]]],[11,"from",E,E,21,[[[T]],[T]]],[11,"into",E,E,21,[[],[U]]],[11,R[34],E,E,21,[[[U]],[R[28]]]],[11,R[35],E,E,21,[[],[R[28]]]],[11,R[36],E,E,21,[[["self"]],[T]]],[11,R[40],E,E,21,[[["self"]],[T]]],[11,R[39],E,E,21,[[["self"]],[R[41]]]],[11,"from",E,E,22,[[[T]],[T]]],[11,R[37],E,E,22,[[["self"]],[T]]],[11,R[38],E,E,22,[[["self"],[T]]]],[11,"into",E,E,22,[[],[U]]],[11,R[34],E,E,22,[[[U]],[R[28]]]],[11,R[35],E,E,22,[[],[R[28]]]],[11,R[36],E,E,22,[[["self"]],[T]]],[11,R[40],E,E,22,[[["self"]],[T]]],[11,R[39],E,E,22,[[["self"]],[R[41]]]],[11,"from",E,E,7,[[[T]],[T]]],[11,R[37],E,E,7,[[["self"]],[T]]],[11,R[38],E,E,7,[[["self"],[T]]]],[11,"into",E,E,7,[[],[U]]],[11,R[34],E,E,7,[[[U]],[R[28]]]],[11,R[35],E,E,7,[[],[R[28]]]],[11,R[36],E,E,7,[[["self"]],[T]]],[11,R[40],E,E,7,[[["self"]],[T]]],[11,R[39],E,E,7,[[["self"]],[R[41]]]],[11,R[44],E,E,7,[[["self"]],[[R[43]],["vec",["u8"]],[R[28],["vec",R[43]]]]]],[11,"from",E,E,8,[[[T]],[T]]],[11,R[37],E,E,8,[[["self"]],[T]]],[11,R[38],E,E,8,[[["self"],[T]]]],[11,"into",E,E,8,[[],[U]]],[11,R[34],E,E,8,[[[U]],[R[28]]]],[11,R[35],E,E,8,[[],[R[28]]]],[11,R[36],E,E,8,[[["self"]],[T]]],[11,R[40],E,E,8,[[["self"]],[T]]],[11,R[39],E,E,8,[[["self"]],[R[41]]]],[11,R[44],E,E,8,[[["self"]],[[R[43]],["vec",["u8"]],[R[28],["vec",R[43]]]]]],[11,"from",E,E,9,[[[T]],[T]]],[11,R[37],E,E,9,[[["self"]],[T]]],[11,R[38],E,E,9,[[["self"],[T]]]],[11,"into",E,E,9,[[],[U]]],[11,R[34],E,E,9,[[[U]],[R[28]]]],[11,R[35],E,E,9,[[],[R[28]]]],[11,R[36],E,E,9,[[["self"]],[T]]],[11,R[40],E,E,9,[[["self"]],[T]]],[11,R[39],E,E,9,[[["self"]],[R[41]]]],[11,R[44],E,E,9,[[["self"]],[[R[43]],["vec",["u8"]],[R[28],["vec",R[43]]]]]],[11,"from",R[45],E,24,[[[T]],[T]]],[11,"into",E,E,24,[[],[U]]],[11,R[34],E,E,24,[[[U]],[R[28]]]],[11,R[35],E,E,24,[[],[R[28]]]],[11,R[36],E,E,24,[[["self"]],[T]]],[11,R[40],E,E,24,[[["self"]],[T]]],[11,R[39],E,E,24,[[["self"]],[R[41]]]],[11,"from",R[46],E,25,[[[T]],[T]]],[11,"into",E,E,25,[[],[U]]],[11,R[34],E,E,25,[[[U]],[R[28]]]],[11,R[35],E,E,25,[[],[R[28]]]],[11,R[36],E,E,25,[[["self"]],[T]]],[11,R[40],E,E,25,[[["self"]],[T]]],[11,R[39],E,E,25,[[["self"]],[R[41]]]],[11,"meta",R[42],E,10,[[["self"]],[R[1]]]],[11,R[47],E,E,10,[[["self"]],[R[1]]]],[11,"meta",E,E,11,[[["self"]],[R[1]]]],[11,R[47],E,E,11,[[["self"]],[R[1]]]],[11,"meta",E,E,12,[[["self"]],[R[1]]]],[11,R[47],E,E,12,[[["self"]],[R[1]]]],[11,"meta",E,E,13,[[["self"]],[R[1]]]],[11,R[47],E,E,13,[[["self"]],[R[1]]]],[11,"meta",E,E,14,[[["self"]],[R[1]]]],[11,R[47],E,E,14,[[["self"]],[R[1]]]],[11,"meta",E,E,16,[[["self"]],[R[1]]]],[11,R[47],E,E,16,[[["self"]],[R[1]]]],[11,"meta",E,E,17,[[["self"]],[R[1]]]],[11,R[47],E,E,17,[[["self"]],[R[1]]]],[11,"meta",E,E,18,[[["self"]],[R[1]]]],[11,R[47],E,E,18,[[["self"]],[R[1]]]],[11,"meta",E,E,19,[[["self"]],[R[1]]]],[11,R[47],E,E,19,[[["self"]],[R[1]]]],[11,"meta",E,E,20,[[["self"]],[R[1]]]],[11,R[47],E,E,20,[[["self"]],[R[1]]]],[11,"meta",E,E,21,[[["self"]],[R[1]]]],[11,R[47],E,E,21,[[["self"]],[R[1]]]],[11,"meta",E,E,22,[[["self"]],[R[1]]]],[11,R[47],E,E,22,[[["self"]],[R[1]]]],[11,"from",R[22],E,4,[[[R[48]],["context",[R[48]]]],["error"]]],[11,"from",E,E,4,[[["handleerror"]],["error"]]],[11,"from",E,E,4,[[["error"]],["error"]]],[11,"from",E,E,4,[[["storeerror"]],["error"]]],[11,"from",E,E,4,[[["error"]],["error"]]],[11,"from",E,E,4,[[["osstring"]],["error"]]],[11,"from",E,E,4,[[["infallible"]],["error"]]],[11,R[49],E,E,2,[[],["self"]]],[11,R[49],E,E,0,[[],[R[1]]]],[11,R[49],R[45],E,24,[[],["self"]]],[11,"clone",R[22],E,2,[[["self"]],[R[50]]]],[11,"clone",E,E,0,[[["self"]],[R[1]]]],[11,"clone",R[42],E,6,[[["self"]],[R[51]]]],[11,"clone",E,E,10,[[["self"]],["booleanmetric"]]],[11,"clone",E,E,11,[[["self"]],["countermetric"]]],[11,"clone",E,E,14,[[["self"]],["eventmetric"]]],[11,"clone",E,E,15,[[["self"]],[R[52]]]],[11,"clone",E,E,7,[[["self"]],[R[53]]]],[11,"clone",E,E,5,[[["self"]],[R[25]]]],[11,"clone",E,E,17,[[["self"]],["quantitymetric"]]],[11,"clone",E,E,18,[[["self"]],["stringmetric"]]],[11,"clone",E,E,19,[[["self"]],["stringlistmetric"]]],[11,"clone",E,E,8,[[["self"]],[R[14]]]],[11,"clone",E,E,22,[[["self"]],["uuidmetric"]]],[11,"clone",E,E,9,[[["self"]],["metric"]]],[11,"clone",R[22],E,1,[[["self"]],[R[30]]]],[11,"eq",E,E,2,[[["self"],[R[50]]],["bool"]]],[11,"fmt",E,E,4,[[["self"],[R[54]]],[R[28]]]],[11,"fmt",E,E,2,[[["self"],[R[54]]],[R[28]]]],[11,"fmt",E,E,0,[[["self"],[R[54]]],[R[28]]]],[11,"fmt",E,E,4,[[["self"],[R[54]]],[R[28]]]],[11,"fmt",E,E,3,[[["self"],[R[54]]],[R[28]]]],[11,"fmt",R[42],E,6,[[["self"],[R[54]]],[R[28]]]],[11,"fmt",E,E,10,[[["self"],[R[54]]],[R[28]]]],[11,"fmt",E,E,11,[[["self"],[R[54]]],[R[28]]]],[11,"fmt",E,E,12,[[["self"],[R[54]]],[R[28]]]],[11,"fmt",E,E,13,[[["self"],[R[54]]],[R[28]]]],[11,"fmt",E,E,14,[[["self"],[R[54]]],[R[28]]]],[11,"fmt",E,E,15,[[["self"],[R[54]]],[R[28]]]],[11,"fmt",E,E,16,[[["self"],[R[54]]],[R[28]]]],[11,"fmt",E,E,7,[[["self"],[R[54]]],[R[28]]]],[11,"fmt",E,E,5,[[["self"],[R[54]]],[R[28]]]],[11,"fmt",E,E,17,[[["self"],[R[54]]],[R[28]]]],[11,"fmt",E,E,18,[[["self"],[R[54]]],[R[28]]]],[11,"fmt",E,E,19,[[["self"],[R[54]]],[R[28]]]],[11,"fmt",E,E,8,[[["self"],[R[54]]],[R[28]]]],[11,"fmt",E,E,20,[[["self"],[R[54]]],[R[28]]]],[11,"fmt",E,E,21,[[["self"],[R[54]]],[R[28]]]],[11,"fmt",E,E,22,[[["self"],[R[54]]],[R[28]]]],[11,"fmt",E,E,9,[[["self"],[R[54]]],[R[28]]]],[11,"fmt",R[22],E,1,[[["self"],[R[54]]],[R[28]]]],[11,"fmt",E,E,26,[[["self"],[R[54]]],[R[28]]]],[11,R[34],E,E,2,[[["i32"]],[[R[28],[R[50]]],[R[50]]]]],[11,R[34],R[42],E,6,[[["i32"]],[[R[51]],[R[28],[R[51]]]]]],[11,R[34],E,E,7,[[["i32"]],[[R[28],[R[53]]],[R[53]]]]],[11,R[34],E,E,8,[[["i32"]],[[R[28],[R[14]]],[R[14]]]]],[11,R[55],E,E,6,[[["self"],["__s"]],[R[28]]]],[11,R[55],E,E,7,[[["self"],["__s"]],[R[28]]]],[11,R[55],E,E,8,[[["self"],["__s"]],[R[28]]]],[11,R[55],E,E,9,[[["self"],["__s"]],[R[28]]]],[11,R[56],E,E,6,[[["__d"]],[R[28]]]],[11,R[56],E,E,7,[[["__d"]],[R[28]]]],[11,R[56],E,E,8,[[["__d"]],[R[28]]]],[11,R[56],E,E,9,[[["__d"]],[R[28]]]],[11,"cause",R[22],E,4,[[["self"]],[[R[4],["fail"]],["fail"]]]],[11,R[57],E,E,4,[[["self"]],[[R[57]],[R[4],[R[57]]]]]]],"p":[[3,R[58]],[3,R[59]],[4,R[60]],[4,R[61]],[3,"Error"],[3,R[62]],[4,R[63]],[4,R[64]],[4,R[65]],[4,"Metric"],[3,R[66]],[3,R[67]],[3,R[68]],[3,R[69]],[3,R[70]],[3,R[71]],[3,R[72]],[3,R[73]],[3,R[74]],[3,R[75]],[3,R[76]],[3,R[77]],[3,R[78]],[8,R[79]],[3,R[80]],[3,R[81]],[3,"Glean"]]};
searchIndex["glean_ffi"]={"doc":E,"i":[[3,R[82],"glean_ffi","Configuration over FFI.",N,N],[5,"glean_enable_logging",E,"Initialize the logging system based on the target…",N,[[]]],[5,"glean_initialize",E,E,N,[[],["u64"]]],[5,"glean_initialize_migration",E,E,N,[[["i32"]],["u64"]]],[5,"glean_on_ready_to_send_pings",E,E,N,[[["u64"]],["u8"]]],[5,"glean_is_upload_enabled",E,E,N,[[["u64"]],["u8"]]],[5,"glean_set_upload_enabled",E,E,N,[[["u64"],["u8"]]]],[5,"glean_send_pings_by_name",E,E,N,[[["i32"],["u64"],["u8"]],["u8"]]],[5,"glean_ping_collect",E,E,N,[[["u64"]]]],[5,"glean_set_experiment_active",E,E,N,[[["i32"],["ffistr"],["u64"]]]],[5,"glean_set_experiment_inactive",E,E,N,[[["ffistr"],["u64"]]]],[5,"glean_experiment_test_is_active",E,E,N,[[["ffistr"],["u64"]],["u8"]]],[5,"glean_experiment_test_get_data",E,E,N,[[["ffistr"],["u64"]]]],[5,"glean_test_clear_all_stores",E,E,N,[[["u64"]]]],[5,"glean_destroy_glean",E,E,N,[[["u64"]]]],[5,"glean_str_free",E,"Public destructor for strings managed by the other side of…",N,[[]]],[14,"define_infallible_handle_map_deleter",E,E,N,N],[14,"define_metric",E,"Define the global handle map, constructor and destructor…",N,N],[11,"from",E,E,0,[[[T]],[T]]],[11,"into",E,E,0,[[],[U]]],[11,R[34],E,E,0,[[[U]],[R[28]]]],[11,R[35],E,E,0,[[],[R[28]]]],[11,R[36],E,E,0,[[["self"]],[T]]],[11,R[40],E,E,0,[[["self"]],[T]]],[11,R[39],E,E,0,[[["self"]],[R[41]]]]],"p":[[3,R[82]]]};
initSearch(searchIndex);addSearchOptions(searchIndex);