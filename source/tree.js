'use strict';

const isInt = (a) => {
	//Check if not NaN
	if(a!==a){
	    return false;
	}
    if (a!=parseInt(a)){
		return false;
	}
	return true;
}

const tree = (N) => {
    if(!isInt(N)){ 
	    return null; 
	}
	if(N<3){
		return null;
	}
    let res = "";
    let spaces = "";
    let level=0;
    for(;level< N-1; level++){
        spaces = ' '.repeat(N-2-level);
        res = res.concat(spaces, '*'.repeat(2*level+1),spaces,'\n');
    }
    spaces  = ' '.repeat(N-2);
    return res.concat(spaces,'|',spaces,'\n');
};