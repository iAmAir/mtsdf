# mtsdf

## Build Mac OS

- brew install cmake
- brew install vcpkg
- git clone https://github.com/microsoft/vcpkg "$HOME/vcpkg"
- export VCPKG_ROOT="$HOME/vcpkg"
- brew install pkg-config
- git submodule update --init --recursive
- cd ./mtsdf
- vcpkg install
- cmake .
- make