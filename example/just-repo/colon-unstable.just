mod? screenshot 'screenshot.just'

# set a := "ass"

version := `sed -En 's/version[[:space:]]*=[[:space:]]*"([^"]+)"/v\1/p' Cargo.toml`
world := `echo world`

hello:
    echo hello {{ world }}

first:
    echo first:one

second:
    echo second:two

third:
    echo third:three
