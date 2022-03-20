
.PHONY: run clean

all:
	sass styles/index.scss diststyles/index.css
clean:
	rm -rf diststyles
run: all
	firefox ./index.html
