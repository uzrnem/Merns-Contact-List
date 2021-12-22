
parse_git_branch() {
     git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/[\1/'
}
#0 - Black, 1 - Red, 2 - Green, 3 - Brown/yellow, 4 - Blue
#5 - Purple, 6 - Cyan, 7 - Light grey/white, 9 - Default
# GREEN="\[\033[01;32m\]" , NO_COLOR="\[\033[00m\]"

if [ "$color_prompt" = yes ]; then
    PS1='\[\033[01;32m\]\u@\h\[\033[01;37m\] x \[\033[01;33m\]\w\[\033[00m\]
${debian_chroot:+($debian_chroot)}\[\033[01;32m\]\e[1;3;36;40m$(parse_git_branch)\e[0m \[\033[01;34m\]\W \[\033[01;35m\]\$ \[\033[00m\]'
    PS1='${debian_chroot:+($debian_chroot)}\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\]\$ '
    PS1="${debian_chroot:+($debian_chroot)}$GREEN\u@\h$NO_COLOR:$BLUE\w$NO_COLOR\$ "
    PS1="${debian_chroot:+($debian_chroot)}$GREEN\u@\h$NO_COLOR:$BLUE\w$NO_COLOR\$ "
    PS1="${debian_chroot:+($debian_chroot)}$BLUE\$(parse_git_branch)] $GREEN\w $YELLOW> $NO_COLOR"
    PS1='${debian_chroot:+($debian_chroot)}\[\033[01;32m\]$(parse_git_branch)] \[\033[01;34m\]\w \[\033[01;35m\]> \[\033[00m\]'
else
    PS1='${debian_chroot:+($debian_chroot)}\u@\h:\w\$ '
    PS1='${debian_chroot:+($debian_chroot)}\$(parse_git_branch)] \w > '
fi