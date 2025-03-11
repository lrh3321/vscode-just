a := "trim_end_match()"
b := trim_end_match(trim_end_match(a, ":"), "/")
local_prefix := env("LOCAL_PREFIX", "/usr/local/ailink5gs")
find_cmd := "find " + local_prefix + "/lib " + local_prefix + "/dpdk/lib -maxdepth 2 -type d -name pkgconfig -printf '%p:'"
pkgconfigDirs := shell(shell(find_cmd), ":")

first:
    echo first:one

second:
    echo second:two
