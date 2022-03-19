
.PHONY: run clean

all:
	tsc
	sass styles/index.scss diststyles/index.css
clean:
	rm -rf distsrc
	rm -rf diststyles
run: all
	firefox ./index.html
