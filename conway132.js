function(g,x,y,w,h){v=g[x][y];s=0;for(i=x-1;i<x+2;i++)for(k=y-1;k<y+2;k++)if(i>=0&&i<w&&k>=0&&k<h)s+=g[i][k];return s==3||v&&s==4;}
