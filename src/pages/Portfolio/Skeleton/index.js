import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';

function SkeletonBody() {
  return (
    <Grid container wrap="nowrap">
        <Box width={210} marginRight={0.5} my={1}>
            <Skeleton variant="rect" width={210} height={118} />
            <Box pt={0.5}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
        </Box>
    </Grid>
  );
}

export default function SkeletonLoading() {
  return (
      <Box overflow='hidden'>
        <SkeletonBody/>  
      </Box>
  );
}
