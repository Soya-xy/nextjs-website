/* eslint-disable react/jsx-key  */

// import { motion } from "framer-motion";
import { Fragment } from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'

import 'react-vertical-timeline-component/style.min.css'

const customContent = [
  <div>
    <h3>Custom Card 1</h3>
    <p>This is the first custom card</p>
  </div>,
  <div>
    <h3>Custom Card 2</h3>
    <p>This is the second custom card</p>
  </div>,
  <div>
    <h3>Custom Card 2</h3>
    <p>This is the second custom card</p>
  </div>,
  <div>
    <h3>Custom Card 2</h3>
    <p>This is the second custom card</p>
  </div>,
  <div>
    <h3>Custom Card 2</h3>
    <p>This is the second custom card</p>
  </div>,
  <div>
    <h3>Custom Card 2</h3>
    <p>This is the second custom card</p>
  </div>,
  <div>
    <h3>Custom Card 2</h3>
    <p>This is the second custom card</p>
  </div>,
  <div>
    <h3>Custom Card 2</h3>
    <p>This is the second custom card</p>
  </div>,
  <div>
    <h3>Custom Card 2</h3>
    <p>This is the second custom card</p>
  </div>,
  <div>
    <h3>Custom Card 2</h3>
    <p>This is the second custom card</p>
  </div>,
  <div>
    <h3>Custom Card 2</h3>
    <p>This is the second custom card</p>
  </div>,
  <div>
    <h3>Custom Card 2</h3>
    <p>This is the second custom card</p>
  </div>,
  <div>
    <h3>Custom Card 2</h3>
    <p>This is the second custom card</p>
  </div>,
  <div>
    <h3>Custom Card 2</h3>
    <p>This is the second custom card</p>
  </div>,
  <div>
    <h3>Custom Card 2</h3>
    <p>This is the second custom card</p>
  </div>,
  <div>
    <h3>Custom Card 2</h3>
    <p>This is the second custom card</p>
  </div>,
  <div>
    <h3>Custom Card 2</h3>
    <p>This is the second custom card</p>
  </div>,
  <div>
    <h3>Custom Card 2</h3>
    <p>This is the second custom card</p>
  </div>,
  <div>
    <h3>Custom Card 2</h3>
    <p>This is the second custom card</p>
  </div>,
  <div>
    <h3>Custom Card 2</h3>
    <p>This is the second custom card</p>
  </div>,
  <div>
    <h3>Custom Card 2</h3>
    <p>This is the second custom card</p>
  </div>,
  <div>
    <h3>Custom Card 2</h3>
    <p>This is the second custom card</p>
  </div>,
  <div>
    <h3>Custom Card 2</h3>
    <p>This is the second custom card</p>
  </div>,
  <div>
    <h3>Custom Card 2</h3>
    <p>This is the second custom card</p>
  </div>,
  <div>
    <h3>Custom Card 2</h3>
    <p>This is the second custom card</p>
  </div>,
  <div>
    <h3>Custom Card 2</h3>
    <p>This is the second custom card</p>
  </div>,
  <div>
    <h3>Custom Card 2</h3>
    <p>This is the second custom card</p>
  </div>,
  <div>
    <h3>Custom Card 2</h3>
    <p>This is the second custom card</p>
  </div>,
  <div>
    <h3>Custom Card 2</h3>
    <p>This is the second custom card</p>
  </div>,
  <div>
    <h3>Custom Card 2</h3>
    <p>This is the second custom card</p>
  </div>,
  <div>
    <h3>Custom Card 2</h3>
    <p>This is the second custom card</p>
  </div>,
  <div>
    <h3>Custom Card 2</h3>
    <p>This is the second custom card</p>
  </div>,
  <div>
    <h3>Custom Card 2</h3>
    <p>This is the second custom card</p>
  </div>,
  <div>
    <h3>Custom Card 2</h3>
    <p>This is the second custom card</p>
  </div>,
  <div>
    <h3>Custom Card 2</h3>
    <p>This is the second custom card</p>
  </div>,
  <div>
    <h3>Custom Card 2</h3>
    <p>This is the second custom card</p>
  </div>,
  <div>
    <h3>Custom Card 2</h3>
    <p>This is the second custom card</p>
  </div>,
  <div>
    <h3>Custom Card 2</h3>
    <p>This is the second custom card</p>
  </div>,
]

export const List = () => {
  return (
    <>
      <div className=" container mx-auto">
        <VerticalTimeline lineColor="red">
          {customContent.map((v, k) => {
            return (
              // <motion.div
              //   initial={{ y: 20 }}
              //   whileInView={{ y: 0 }}
              //   transition={{ duration: 0.5 }}
              //   viewport={{ once: true }}
              // >
              <Fragment key={k}>
                <VerticalTimelineElement date="2029">
                  {v}
                </VerticalTimelineElement>
              </Fragment>
              // {/* </motion.div > */}
            )
          })}
        </VerticalTimeline>
      </div>
    </>
  )
}
