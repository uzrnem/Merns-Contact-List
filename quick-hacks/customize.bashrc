
parse_git_branch() {
     git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/[\1/'
}
RED="\[\033[01;31m\]"
YELLOW="\[\033[01;33m\]"
GREEN="\[\033[01;32m\]"
BLUE="\[\033[01;34m\]"
NO_COLOR="\[\033[00m\]"

if [ "$color_prompt" = yes ]; then
    PS1='${debian_chroot:+($debian_chroot)}\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\]\$ '
    PS1="${debian_chroot:+($debian_chroot)}$GREEN\u@\h$NO_COLOR:$BLUE\w$NO_COLOR\$ "
    PS1="${debian_chroot:+($debian_chroot)}$GREEN\u@\h$NO_COLOR:$BLUE\w$NO_COLOR\$ "
    PS1="${debian_chroot:+($debian_chroot)}$BLUE\$(parse_git_branch)] $GREEN\w $YELLOW> $NO_COLOR"
    PS1='${debian_chroot:+($debian_chroot)}\[\033[01;32m\]$(parse_git_branch)] \[\033[01;34m\]\w \[\033[01;35m\]> \[\033[01;37m\]'
else
    PS1='${debian_chroot:+($debian_chroot)}\u@\h:\w\$ '
    PS1='${debian_chroot:+($debian_chroot)}\$(parse_git_branch)] \w > '
fi