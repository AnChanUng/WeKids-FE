import TopBar from "@/src/ui/components/transaction/transaction-history/TopBar";
import { TransactionFilter } from "@/src/ui/components/transaction/transaction-history/TransactionFilter";
import { TransactionsView } from "@/src/ui/components/transaction/transaction-history/TransactionsView";
import { Box, Flex } from "@radix-ui/themes";

export default function Page({ searchParams }) {
  const { color } = searchParams;
  console.log("transactionhistory " + color);

  return (
    <section>
      <Flex direction="column" justify="between">
        <Box>
          <TopBar
            name="조예은"
            balance="110000009862"
            accountNumber="1111-11-111111"
            bgColor={color}
          />
        </Box>
        <Box className="cursor-pointer">
          <TransactionFilter />
        </Box>
        <Box>
          {/* todo 여기에 AccountHistoryHead에 들어가는
          더미 불러올 때 받아오는 id 값 넣어주면 됨 */}
          <TransactionsView id="2" />
        </Box>
      </Flex>
    </section>
  );
}
